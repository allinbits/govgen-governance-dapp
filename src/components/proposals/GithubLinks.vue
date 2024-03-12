<script lang="ts" setup>
import { onMounted, ref, computed, reactive } from "vue";
import DOMPurify from "dompurify";
import * as Utility from "@/utility/index";

import ModalWrap from "@/components/common/ModalWrap.vue";

import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import { useGithubDiscusser } from "@/composables/useGithubDiscusser";

const props = defineProps<{ term: string }>();

const { logout, isLoggedIn, login, username } = useGithubDiscussions();
const { links, refresh, postMessage, postUpvote, isPosting, isFailing, isLoaded } = useGithubDiscusser(props.term);

const linkInput = ref<string>("");
const contextInput = ref<string>("");

const state = reactive({
  showLinkModal: false,
  isLinkValid: false,
  isContextValid: false,
});

async function createPost() {
  if (isPosting.value) {
    return;
  }

  if (!isLoggedIn) {
    return;
  }

  if (!state.isLinkValid) {
    return;
  }

  const didPost = await postMessage(contextInput.value + "\r\n" + linkInput.value);
  if (!didPost) {
    window.alert("Failed to post comment");
    return;
  }

  linkInput.value = "";
}

function verifyLinkInput() {
  state.isLinkValid = Utility.isLink(linkInput.value);
}

function verifyContextInput() {
  state.isContextValid = contextInput.value.length >= 32;
}

const inputLinkText = computed(() => {
  return `Adding link as ${username.value}...`;
});

const textInputLinkText = computed(() => {
  return `Adding link context as ${username.value}...`;
});

onMounted(refresh);
</script>

<template>
  <div>
    <ModalWrap :visible="state.showLinkModal" @back="state.showLinkModal = false">
      <div class="flex flex-col gap-6">
        <label for="link">Link</label>
        <label v-if="!state.isLinkValid" for="link" class="text-red-500">Link is not valid, must be https</label>
        <input
          id="link"
          v-model="linkInput"
          name="link"
          maxlength="512"
          class="shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md p-4"
          type="text"
          :placeholder="inputLinkText"
          @input="verifyLinkInput()"
        />
        <label for="context">Context</label>
        <label v-if="!state.isContextValid" for="link" class="text-red-500"
          >Context must be at least 32 characters</label
        >
        <textarea
          id="context"
          v-model="contextInput"
          name="context"
          maxlength="512"
          rows="6"
          class="shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md p-4"
          type="text"
          :placeholder="textInputLinkText"
          @input="verifyContextInput()"
        ></textarea>
        <button class="px-4 py-2 bg-green-600 text-white rounded-md text-sm" :disabled="isPosting" @click="createPost">
          Post
        </button>
      </div>
    </ModalWrap>
    <!-- Login, or Add Link -->
    <div class="flex flex-row justify-between items-center">
      <div class="font-bold text-lg text-gray-700">Community Links</div>
      <div class="flex gap-6 flex-row">
        <button v-if="!isLoggedIn" class="px-4 py-2 bg-green-600 text-white rounded-md text-sm" @click="login">
          Login with GitHub
        </button>
        <template v-else>
          <button class="px-4 py-2 bg-gray-400 text-white rounded-md text-sm" @click="logout">
            Logout {{ username }}
          </button>
          <button class="px-4 py-2 bg-gray-600 text-white rounded-md text-sm" @click="state.showLinkModal = true">
            Add Link
          </button>
        </template>
      </div>
    </div>
    <div v-if="isLoaded && !isFailing" class="flex flex-col gap-2 w-full mb-4">
      <div class="grid gap-6 w-full flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6">
        <div
          v-for="(comment, index) in links"
          :key="index"
          class="flex flex-row pt-8 pl-8 pr-8 pb-6 rounded-2xl shadow-md w-full bg-grey-400 rounded-md"
        >
          <div class="flex flex-col items-start w-full gap-4">
            <a
              :href="comment.link"
              target="_blank"
              class="flex items-center text-400 start-8 font-normal hover:opacity-50"
            >
              <Icon icon="link" class="text-400 mr-[6px]" />Link
            </a>

            <!-- eslint-disable vue/no-v-html -->
            <div class="w-full flex-grow text-grey-100 text-300 h-20" v-html="DOMPurify.sanitize(comment.body)" />
            <!-- eslint-enable -->
            <div class="flex flex-row justify-between gap-2 text-xs text-gray-500 w-full mt-4">
              <a :href="comment.author.url" target="_blank" class="text-grey-100 text-100 hover:opacity-50">
                by {{ comment.author.login }}
              </a>
              <div
                :class="isLoggedIn ? ['cursor-pointer', 'hover:opacity-50'] : []"
                class="flex flex-row items-center gap-2 text-grey-100 text-100"
                @click="postUpvote(comment.id, comment.didUpvote)"
              >
                <Icon icon="thumbsup" />
                <div class="text-center text-sm">{{ comment.upvotes }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoaded && isFailing" class="flex flex-col items-center text-center text-medium font-bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none">
        <path
          d="M19 6L6 19M6 6l13 13"
          stroke="#FF0000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Failed to Load Comments</span>
      <button class="p-2 w-32 bg-green-600 text-white rounded-md text-sm mt-2" @click="refresh">Retry?</button>
    </div>
    <div v-if="!isLoaded" class="flex flex-col text-center text-medium font-bold">
      <div class="loader" />
      <span>Loading Links...</span>
    </div>
  </div>
</template>

<style>
.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 20px auto; /* Center the spinner */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script lang="ts" setup>
import { onMounted, ref, computed, reactive } from "vue";
import DOMPurify from "dompurify";
import * as Utility from "@/utility/index";
import CommonButton from "@/components/ui/CommonButton.vue";

import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import { useGithubDiscusser } from "@/composables/useGithubDiscusser";

const props = defineProps<{ term: string }>();

const { logout, isLoggedIn, login, username } = useGithubDiscussions();
const { links, refresh, postMessage, postVote, isPosting, isFailing, isLoading } = useGithubDiscusser(props.term);

const linkInput = ref<string>("");
const contextInput = ref<string>("");

const state = reactive({
  isAddingLink: false,
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
  state.isAddingLink = false;
}

function verifyLinkInput() {
  state.isLinkValid = Utility.isLink(linkInput.value);
}

function verifyContextInput() {
  state.isContextValid = contextInput.value.length >= 32;
}

const isInputValid = computed(() => {
  return state.isLinkValid && state.isContextValid;
});

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
    <!-- Login, or Add Link -->
    <div class="flex flex-col justify-between items-center gap-3 md:flex-row md:gap-6 w-full">
      <div class="text-light text-500 font-medium text-left w-full">Community Links</div>
      <div class="flex flex-col gap-3 md:flex-row md:gap-6 w-full justify-end">
        <CommonButton v-if="!isLoggedIn" @click="login"> Login with GitHub </CommonButton>
        <template v-else>
          <CommonButton @click="logout"> Sign Out </CommonButton>
          <CommonButton @click="state.isAddingLink = true"> Add Link </CommonButton>
        </template>
      </div>
    </div>
    <!-- Input Link Section -->
    <div v-if="state.isAddingLink" class="flex flex-col gap-6 pt-6 w-full">
      <!-- Link Input -->
      <label for="link">Link</label>
      <input
        id="link"
        v-model="linkInput"
        name="link"
        maxlength="512"
        class="outline-none gap-2 p-4 border border-grey-200 bg-grey-300 rounded hover:border-grey-100 focus:border-light cursor-text placeholder:text-grey-100 items-center text-200 w-full"
        type="text"
        :placeholder="inputLinkText"
        @input="verifyLinkInput()"
      />
      <div v-if="!state.isLinkValid" class="text-neg-200 text-100">Link is not valid, must be https</div>
      <!-- Context Input -->
      <label for="link">Context</label>
      <textarea
        id="context"
        v-model="contextInput"
        name="context"
        maxlength="512"
        rows="6"
        class="outline-none gap-2 p-4 border border-grey-200 bg-grey-300 rounded hover:border-grey-100 focus:border-light cursor-text placeholder:text-grey-100 items-center text-200 w-full"
        type="text"
        :placeholder="textInputLinkText"
        @input="verifyContextInput()"
      ></textarea>
      <div v-if="!state.isContextValid" class="text-neg-200 text-100">Context must be at least 32 characters</div>
      <div class="flex flex-row w-full justify-end gap-6">
        <CommonButton @click="state.isAddingLink = false">Cancel</CommonButton>
        <CommonButton :disabled="!isInputValid" @click="isInputValid ? createPost() : () => {}">Post</CommonButton>
      </div>
    </div>
    <!-- Rendered Links -->
    <div v-if="!isLoading && !isFailing" class="flex flex-col gap-2 w-full mb-4 pt-8">
      <div class="grid gap-6 w-full flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(linkInfo, index) in links"
          :key="index"
          class="flex flex-row pt-8 pl-8 pr-8 pb-6 rounded-2xl w-full bg-grey-400 rounded-md"
        >
          <div class="flex flex-col items-start w-full gap-4">
            <a
              :href="linkInfo.link"
              target="_blank"
              class="flex items-center text-400 start-8 font-normal hover:opacity-50"
            >
              <Icon icon="link" class="text-400 mr-[6px]" />Link
            </a>

            <!-- eslint-disable vue/no-v-html -->
            <div class="w-full flex-grow text-grey-100 text-300 h-20" v-html="DOMPurify.sanitize(linkInfo.body)" />
            <!-- eslint-enable -->
            <div class="flex flex-row justify-between gap-2 text-xs text-gray-500 w-full mt-4">
              <a :href="linkInfo.author.url" target="_blank" class="text-grey-100 text-100 hover:opacity-50">
                by {{ linkInfo.author.login }}
              </a>
              <div class="flex flex-row gap-2">
                <!-- Upvote -->
                <div
                  :class="isLoggedIn ? ['cursor-pointer', 'hover:opacity-50'] : []"
                  class="flex flex-row items-center gap-2 text-grey-100 text-100"
                  @click="isLoggedIn ? postVote('upvote', linkInfo.id, linkInfo.didUpvote) : () => {}"
                >
                  <Icon icon="thumbsup" />
                  <div class="text-center text-sm">{{ linkInfo.upvotes }}</div>
                </div>
                <!-- Downvote -->
                <div
                  :class="isLoggedIn ? ['cursor-pointer', 'hover:opacity-50'] : []"
                  class="flex flex-row items-center gap-2 text-grey-100 text-100"
                  @click="isLoggedIn ? postVote('downvote', linkInfo.id, linkInfo.didDownvote) : () => {}"
                >
                  <Icon icon="thumbsup" class="rotate-180" />
                  <div class="text-center text-sm">{{ linkInfo.downvotes }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isLoading || isFailing"
      class="grid gap-6 w-full flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8"
    >
      <div
        v-for="index in 6"
        :key="index"
        class="flex flex-row pt-8 pl-8 pr-8 pb-6 rounded-2xl w-full bg-grey-400 rounded-md animate-pulse h-24"
      ></div>
    </div>
  </div>
</template>

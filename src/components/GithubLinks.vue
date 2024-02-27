<script lang="ts" setup>
import { onMounted, ref, computed, reactive } from "vue";
import DOMPurify from "dompurify";
import ModalWrap from "./ModalWrap.vue";

import { useGithubDiscussions } from "../composables/useGithubDiscussions";
import * as GithubTypes from "../types/github/index";
import * as Time from "../utility/time";
import { useConfig } from "../composables/useConfig";

const Config = useConfig();

const { logout, isLoggedIn, login, getDiscussion, getCategory, post, toggleUpvote, username } = useGithubDiscussions();
const props = defineProps<{ term: string }>();
const category = ref<string>();

const linkInput = ref<string>("");
const contextInput = ref<string>("");

const discussion = ref<GithubTypes.DiscussionResponse>();
const state = reactive({
  isLoading: false,
  failedToLoadComments: false,
  isPosting: false,
  showLinkModal: false,
  isLinkValid: false,
  isContextValid: false,
});

async function refreshLinks() {
  state.failedToLoadComments = false;
  state.isLoading = true;

  category.value = await getCategory({ repo: Config.REPO, name: "proposal" });

  if (!category.value) {
    state.failedToLoadComments = true;
    state.isLoading = false;
    return;
  }

  discussion.value = await getDiscussion({
    repo: Config.REPO,
    count: 100,
    term: props.term,
    category: category.value,
    upsert: true,
  });

  if (!discussion.value) {
    state.failedToLoadComments = true;
    state.isLoading = false;
    return;
  }

  state.failedToLoadComments = false;
  state.isLoading = false;
}

async function createPost() {
  if (state.isPosting) {
    return;
  }

  if (!isLoggedIn) {
    return;
  }

  if (!discussion.value) {
    return;
  }

  if (!state.isLinkValid) {
    return;
  }

  state.isPosting = true;
  const response = await post({
    discussion: discussion.value.id,
    message: contextInput.value + "\r\n" + linkInput.value,
  });
  if (!response) {
    window.alert("Failed to post comment");
    state.isPosting = false;
    return;
  }

  linkInput.value = "";
  await refreshLinks();
  state.isPosting = false;
}

async function createUpvote(id: string, hasReacted: boolean) {
  if (!isLoggedIn) {
    return;
  }

  const response = await toggleUpvote({ subjectId: id, didUpvote: hasReacted });
  if (!response) {
    window.alert("Failed to upvote");
    state.isPosting = false;
    return;
  }

  await refreshLinks();
}

function verifyLinkInput() {
  const pattern = /^https:\/\/\S+$/;
  state.isLinkValid = pattern.test(linkInput.value);
}

function verifyContextInput() {
  state.isContextValid = contextInput.value.length >= 32;
}

/**
 * Extract all links from raw html
 *
 * @param rawHtml
 */
function getLinks(rawHtml: string): string[] {
  const doc = document.createElement("html");
  doc.innerHTML = rawHtml;
  const links = doc.getElementsByTagName("a");
  const urls: string[] = [];
  for (let i = 0; i < links.length; i++) {
    const link = links[i].getAttribute("href");
    if (!link) {
      continue;
    }

    urls.push(link);
  }

  return urls;
}

const getComments = computed(() => {
  if (!discussion.value) {
    return [];
  }

  let comments = discussion.value.comments.nodes.map((x) => {
    const upvote = x.reactionGroups.find((x) => x.content == "THUMBS_UP");
    const links = getLinks(x.bodyHTML);
    const bodyText = x.bodyHTML.replace(/(<([^>]+)>)/gi, "");
    const isBodyExceeded = bodyText.length >= 128 ? true : false;

    return {
      id: x.id,
      body: `${bodyText.slice(0, isBodyExceeded ? 128 : bodyText.length)}${isBodyExceeded ? "..." : ""}`,
      createdAt: x.createdAt,
      createdAtHuman: Time.formatHuman(x.createdAt),
      editedAt: x.lastEditedAt,
      author: x.author,
      upvotes: upvote ? upvote.users.totalCount : 0,
      didUpvote: upvote?.viewerHasReacted ? true : false,
      url: x.url,
      link: links[0] ? links[0] : "#",
    };
  });

  comments.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return comments;
});

const inputLinkText = computed(() => {
  return `Adding link as ${username.value}...`;
});

const textInputLinkText = computed(() => {
  return `Adding link context as ${username.value}...`;
});

onMounted(refreshLinks);
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
        <button
          class="px-4 py-2 bg-green-600 text-white rounded-md text-sm"
          @click="createPost"
          :disabled="state.isPosting"
        >
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
    <div v-if="!state.isLoading && !state.failedToLoadComments" class="flex flex-col gap-2 w-full mb-4">
      <div class="grid gap-7 w-full flex-wrap grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6">
        <div
          v-for="(comment, index) in getComments"
          :key="index"
          class="flex flex-row p-6 rounded-2xl shadow-md w-full"
        >
          <div class="flex flex-col items-start w-full">
            <a :href="comment.link" target="_blank" class="text-xl font-bold">Link</a>

            <!-- eslint-disable vue/no-v-html -->
            <div class="text-gray-800 mt-6 w-full flex-grow" v-html="DOMPurify.sanitize(comment.body)" />
            <!--eslint-enable-->
            <div class="flex flex-row justify-between gap-2 text-xs text-gray-500 w-full">
              <a :href="comment.author.url" target="_blank" class="text-gray-600 hover:opacity-50">
                {{ comment.author.login }}
              </a>
              <div
                :class="isLoggedIn ? ['cursor-pointer'] : []"
                class="flex flex-row items-center gap-2 hover:opacity-50"
                @click="createUpvote(comment.id, comment.didUpvote)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  class="bi bi-hand-thumbs-up"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"
                  />
                </svg>
                <div class="text-center text-sm">{{ comment.upvotes }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!state.isLoading && state.failedToLoadComments"
      class="flex flex-col items-center text-center text-medium font-bold"
    >
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
      <button class="p-2 w-32 bg-green-600 text-white rounded-md text-sm mt-2" @click="refreshLinks">Retry?</button>
    </div>
    <div v-if="state.isLoading" class="flex flex-col text-center text-medium font-bold">
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

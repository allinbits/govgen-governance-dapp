<script lang="ts" setup>
import { inject, onMounted, ref, computed, reactive } from "vue";
import * as Keys from "../providers/keys";
import * as GithubTypes from "../types/github/index";
import DOMPurify from "dompurify";

const { setup, logout, isLoggedIn, getLoginUri, getRepo, getDiscussion, getCategory } = inject(
  Keys.GithubOAuth,
) as Keys.IGithubOAuth;

const props = defineProps<{ term: string }>();
const username = ref(inject<string>(Keys.GithubUsername));
const category = ref<string>();
const commentInput = ref<string>("");
const discussion = ref<GithubTypes.DiscussionResponse>();
const state = reactive({
  isLoading: false,
  failedToLoadComments: false,
});

async function refreshDiscussion() {
  state.failedToLoadComments = false;
  state.isLoading = true;

  category.value = await getCategory({ repo: getRepo(), name: "proposal" });

  if (!category.value) {
    state.failedToLoadComments = true;
    state.isLoading = false;
    return;
  }

  discussion.value = await getDiscussion({
    repo: getRepo(),
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

function handleLogin() {
  localStorage.setItem("previous-link", `${window.location.origin}${window.location.pathname}`);
  window.open(getLoginUri(), "_self");
}

function post() {
  if (!isLoggedIn()) {
    return;
  }

  console.log(commentInput.value);
}

const getComments = computed(() => {
  if (!discussion.value) {
    return [];
  }

  const comments = discussion.value.comments.nodes.map((x) => {
    const upvote = x.reactionGroups.find((x) => x.content == "THUMBS_UP");

    return {
      body: x.bodyHTML,
      createdAt: x.createdAt,
      createdAtHuman: new Date(x.createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      editedAt: x.lastEditedAt,
      author: x.author,
      upvotes: upvote ? upvote.users.totalCount : 0,
      url: x.url,
    };
  });

  comments.sort((a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  return comments;
});

const getInputPlaceholderText = computed(() => {
  if (!isLoggedIn()) {
    return "Login to reply...";
  }

  return `Posting as ${username.value}...`;
});

onMounted(async () => {
  setup();
  refreshDiscussion();
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-2 w-full mb-4" v-if="!state.isLoading && !state.failedToLoadComments">
      <label for="markdown" class="font-medium text-gray-700">Leave a Comment</label>
      <div class="mt-4 w-full">
        <textarea
          id="markdown"
          v-model="commentInput"
          :placeholder="getInputPlaceholderText"
          name="markdown"
          rows="6"
          maxlength="65536"
          :disabled="!isLoggedIn()"
          class="shadow-sm outline-none block w-full sm:text-sm border-gray-300 rounded-md p-4"
        ></textarea>
      </div>
      <div v-if="!isLoggedIn()" class="flex flex-row justify-between mt-2 gap-4">
        <button class="mt-2 px-4 py-2 bg-green-600 text-white rounded-md text-sm" @click="handleLogin">
          Login with GitHub
        </button>
      </div>
      <div v-else class="flex flex-row justify-between mt-2 gap-4">
        <button class="p-2 w-32 bg-gray-400 text-white rounded-md text-sm" @click="logout">
          Logout {{ username }}
        </button>
        <button class="p-2 w-32 bg-green-500 text-white rounded-md text-sm" @click="post">Comment</button>
      </div>
      <div class="font-medium text-gray-700">Comment(s)</div>
      <div class="flex flex-col gap-6">
        <div v-for="(comment, index) in getComments" :key="index" class="flex flex-row shadow-md p-6 rounded">
          <!-- Avatar, Name, Comment, Time -->
          <div class="flex flex-col items-start w-full">
            <a class="flex flex-row flex-grow items-center gap-4" :href="comment.author.url" target="_blank">
              <img class="w-10 h-10 rounded-full" :src="comment.author.avatarUrl" alt="User Avatar" />
              <span class="text-gray-600">{{ comment.author.login }}</span>
            </a>
            <!-- eslint-disable vue/no-v-html -->
            <p class="text-gray-800 mt-6" v-html="DOMPurify.sanitize(comment.body)" />
            <!--eslint-enable-->
            <div class="flex flex-row gap-4">
              <div class="text-xs text-gray-500 mt-2">{{ comment.createdAtHuman }}</div>
              <a class="text-xs text-gray-500 mt-2" :href="comment.url" target="_blank">View on GitHub</a>
            </div>
          </div>
          <!-- Upvote -->
          <div class="flex flex-col items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 19V6M5 12l7-7 7 7" />
            </svg>
            <div class="text-center text-sm">{{ comment.upvotes }}</div>
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
      <button class="p-2 w-32 bg-green-600 text-white rounded-md text-sm mt-2" @click="refreshDiscussion">
        Retry?
      </button>
    </div>
    <div v-if="state.isLoading" class="flex flex-col text-center text-medium font-bold">
      <div class="loader" />
      <span>Loading Comments...</span>
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

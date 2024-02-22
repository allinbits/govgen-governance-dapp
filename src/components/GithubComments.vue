<script lang="ts" setup>
import { inject, onMounted, ref, computed, reactive } from "vue";
import * as Keys from "../providers/keys";
import * as GithubTypes from "../types/github/index";
import DOMPurify from "dompurify";

const { setup, logout, isLoggedIn, getLoginUri, getRepo, getDiscussion, getCategory, post, toggleUpvote } = inject(
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
  isPosting: false,
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

async function createPost() {
  if (!isLoggedIn()) {
    return;
  }

  if (!discussion.value) {
    return;
  }

  state.isPosting = true;
  const response = await post({ discussion: discussion.value.id, message: commentInput.value });
  if (!response) {
    window.alert("Failed to post comment");
    state.isPosting = false;
    return;
  }

  commentInput.value = "";
  await refreshDiscussion();
  state.isPosting = false;
}

async function createUpvote(id: string, hasReacted: boolean) {
  if (!isLoggedIn()) {
    return;
  }

  const response = await toggleUpvote({ subjectId: id, didUpvote: hasReacted });
  if (!response) {
    window.alert("Failed to upvote");
    state.isPosting = false;
    return;
  }

  await refreshDiscussion();
}

const getComments = computed(() => {
  if (!discussion.value) {
    return [];
  }

  let comments = discussion.value.comments.nodes.map((x) => {
    const upvote = x.reactionGroups.find((x) => x.content == "THUMBS_UP");

    return {
      id: x.id,
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
      didUpvote: upvote?.viewerHasReacted ? true : false,
      url: x.url,
    };
  });

  comments.sort((a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });

  comments = comments.reverse();

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
    <div v-if="!state.isLoading && !state.failedToLoadComments" class="flex flex-col gap-2 w-full mb-4">
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
        <template v-if="state.isPosting">
          <button
            class="flex p-2 w-32 bg-green-500 text-white rounded-md text-sm items-center justify-center"
            :disabled="state.isPosting"
          >
            <svg
              class="text-gray-300 animate-spin"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-900"
              ></path>
            </svg>
          </button>
        </template>
        <template v-else>
          <button
            class="flex p-2 w-32 bg-green-500 text-white rounded-md text-sm items-center justify-center"
            @click="createPost"
          >
            Post Comment
          </button>
        </template>
      </div>
      <div class="font-medium text-gray-700">Latest Comment(s)</div>
      <div class="flex flex-col gap-6">
        <div v-for="(comment, index) in getComments" :key="index" class="flex flex-row shadow-md p-6 rounded">
          <div class="flex flex-col items-start w-full">
            <!-- Header -->
            <div class="flex flex-row flex-grow items-center gap-4 w-full">
              <!-- Author -->
              <a
                :href="comment.author.url"
                target="_blank"
                class="flex items-center gap-4 text-gray-600 hover:opacity-50"
              >
                <img class="w-10 h-10 rounded-full" :src="comment.author.avatarUrl" alt="User Avatar" />
                <div>
                  {{ comment.author.login }}
                </div>
              </a>
              <!-- Upvote -->
              <div
                :class="isLoggedIn() ? ['cursor-pointer'] : []"
                class="flex flex-col items-center ml-auto hover:opacity-50"
                @click="createUpvote(comment.id, comment.didUpvote)"
              >
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
            <!-- eslint-disable vue/no-v-html -->
            <div class="text-gray-800 mt-6 w-full" v-html="DOMPurify.sanitize(comment.body)" />
            <!--eslint-enable-->
            <div class="flex flex-row gap-2 text-xs text-gray-500">
              <div>{{ comment.createdAtHuman }}</div>
              <span>&#8212;</span>
              <a :href="comment.url" target="_blank" class="hover:opacity-50">View on GitHub</a>
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

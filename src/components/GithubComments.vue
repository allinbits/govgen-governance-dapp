<script lang="ts" setup>
import { inject, onMounted, ref, computed } from "vue";
import * as Keys from "../providers/keys";
import * as GithubTypes from "../types/github/index";

const props = defineProps<{ term: string }>();

const { setup, logout, isLoggedIn, getLoginUri, getRepo, getDiscussion, getCategory } = inject(
  Keys.GithubOAuth,
) as Keys.IGithubOAuth;

const username = ref(inject<string>(Keys.GithubUsername));
const category = ref<string>();
// const avatar = inject<string>(Keys.GithubAvatar);

const commentInput = ref<string>("");
const discussion = ref<GithubTypes.DiscussionResponse>();

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

async function refreshDiscussion() {
  if (!category.value) {
    return;
  }

  discussion.value = await getDiscussion({
    repo: getRepo(),
    count: 100,
    term: props.term,
    category: category.value,
    upsert: true,
  });
}

const getComments = computed(() => {
  if (!discussion.value) {
    return [];
  }

  const comments = discussion.value.comments.nodes.map((x) => {
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

  category.value = await getCategory({ repo: getRepo(), name: "proposal" });
  refreshDiscussion();
});
</script>

<template>
  <div>
    <div class="flex flex-col gap-2 w-full mb-4">
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
            <p class="text-gray-800 mt-6" v-html="comment.body" />
            <div class="text-xs text-gray-500 mt-2">{{ comment.createdAtHuman }}</div>
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
            <div class="text-center text-sm">5</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

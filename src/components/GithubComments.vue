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

  return discussion.value.comments.nodes.map((x) => {
    return {
      body: x.bodyHTML,
      createdAt: x.createdAt,
      editedAt: x.lastEditedAt,
      author: x.author,
    };
  });
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
    <div class="flex flex-col gap-2 w-full max-w-md">
      <label for="markdown" class="font-medium text-gray-700">Leave a Comment</label>
      <div class="mt-4">
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
      <div v-for="(comment, index) in getComments" :key="index">
        <div v-html="comment.body" />
      </div>
    </div>
  </div>
</template>

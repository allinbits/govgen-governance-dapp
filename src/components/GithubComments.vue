<script lang="ts" setup>
import { inject, onMounted, ref, computed } from "vue";
import * as Keys from "../providers/keys";

const { setup, logout, isLoggedIn, getLoginUri } = inject(Keys.GithubOAuth) as Keys.IGithubOAuth;
const username = ref(inject<string>(Keys.GithubUsername));
// const avatar = inject<string>(Keys.GithubAvatar);

const commentInput = ref<string>("");

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

const getInputPlaceholderText = computed(() => {
  if (!isLoggedIn()) {
    return "Login to reply...";
  }

  return `Posting as ${username.value}...`;
});

onMounted(() => {
  setup();
});
</script>

<template>
  <div>
    <div class="w-full max-w-md">
      <label for="markdown" class="font-medium text-gray-700">Comment(s)</label>
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
    </div>
  </div>
</template>

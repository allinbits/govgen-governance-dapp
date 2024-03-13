<script lang="ts" setup>
import { onMounted, ref, computed, reactive } from "vue";
import DOMPurify from "dompurify";
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import { useConfig } from "@/composables/useConfig";
import * as Time from "@/utility/time";

import CommonButton from "@/components/ui/CommonButton.vue";
import { useGithubDiscusser } from "@/composables/useGithubDiscusser";
import DropDown from "@/components/ui/DropDown.vue";

const Config = useConfig();
const props = defineProps<{ term: string }>();
const sortingType = ref(0);

const { logout, isLoggedIn, login, username, avatar } = useGithubDiscussions();
const { comments, refresh, postMessage, postUpvote, isPosting, isFailing, isLoaded } = useGithubDiscusser(props.term);

const commentInput = ref<string>("");
const state = reactive({
  isLoading: false,
  failedToLoadComments: false,
  isPosting: false,
});

function handleSortingChange(index: number) {
  sortingType.value = index;
}

// async function createPost() {
//   if (!isLoggedIn) {
//     return;
//   }

//   if (!discussion.value) {
//     return;
//   }

//   state.isPosting = true;
//   const response = await post({ discussion: discussion.value.id, message: commentInput.value });
//   if (!response) {
//     window.alert("Failed to post comment");
//     state.isPosting = false;
//     return;
//   }

//   commentInput.value = "";
//   state.isPosting = false;
// }

// async function createUpvote(id: string, hasReacted: boolean) {
//   if (!isLoggedIn) {
//     return;
//   }

//   const response = await toggleUpvote({ subjectId: id, didUpvote: hasReacted });
//   if (!response) {
//     window.alert("Failed to upvote");
//     state.isPosting = false;
//     return;
//   }
// }

onMounted(refresh);
</script>

<template>
  <div class="flex flex-col w-full gap-[72px]">
    <!-- Login & Comment Post Section -->
    <div
      v-if="!isLoggedIn"
      class="flex flex-row gap-8 px-8 py-6 bg-gradient from-gradient-100 to-gradient-900 rounded-md text-dark justify-between items-center"
    >
      <span class="text-400 font-medium">Sign in via GitHub to be able to post messages</span>
      <button class="bg-dark py-4 px-6 text-light rounded-md" @click="login">GitHub Sign In</button>
    </div>
    <div v-else class="flex flex-col gap-8 w-full">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-3 items-center">
          <img :src="avatar" class="w-10 h-10 rounded-circle" />
          <span class="pt-1 font-medium text-400">{{ username }}</span>
        </div>
        <CommonButton @click="logout">Sign Out</CommonButton>
      </div>
      <div class="flex flex-col relative">
        <textarea
          id="markdown"
          v-model="commentInput"
          placeholder="Enter your comment..."
          name="markdown"
          rows="6"
          maxlength="65536"
          :disabled="!isLoggedIn"
          class="outline-none gap-2 h-52 p-4 border border-grey-200 bg-grey-300 rounded hover:border-grey-100 focus:border-light cursor-text placeholder:text-grey-100 items-center text-200 w-full"
        ></textarea>
        <CommonButton
          class="absolute right-6 bottom-6 bg-gradient from-gradient-100 to-gradient-900 !text-dark hover:opacity-75"
        >
          Post Comment
        </CommonButton>
      </div>
    </div>

    <!-- Comments -->
    <div v-if="!state.isLoading && !state.failedToLoadComments" class="flex flex-col w-full">
      <!-- <label for="markdown" class="font-medium text-gray-700">Leave a Comment</label>
      <div class="mt-4 w-full">
        
      </div>
      <div v-if="!isLoggedIn" class="flex flex-row justify-between mt-2 gap-4">
        <button class="mt-2 px-4 py-2 bg-green-600 text-light rounded-md text-sm" @click="login">
          Login with GitHub
        </button>
      </div>
      <div v-else class="flex flex-row justify-between mt-2 gap-4">
        <button class="p-2 w-32 bg-gray-400 text-light rounded-md text-sm" @click="logout">
          Logout {{ username }}
        </button>
        <template v-if="state.isPosting">
          <button
            class="flex p-2 w-32 bg-green-500 text-light rounded-md text-sm items-center justify-center"
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
            class="flex p-2 w-32 bg-green-500 text-light rounded-md text-sm items-center justify-center"
            @click="createPost"
          >
            Post Comment
          </button>
        </template> -->
      <!-- </div> -->
      <div class="flex flex-row w-full justify-between items-center mb-8">
        <div class="text-500 font-medium">Proposal Discussions</div>
        <DropDown :values="['Popular', 'Oldest', 'Latest']" v-model="sortingType" @select="handleSortingChange" />
      </div>
      <div class="flex flex-col gap-6">
        <!-- Comments -->
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="flex flex-col bg-grey-400 px-8 py-10 rounded-md gap-8"
        >
          <!-- Author -->
          <a
            :href="comment.author.url"
            target="_blank"
            class="flex items-center gap-[10px] text-light hover:opacity-50"
          >
            <img class="w-8 h-8 rounded-full" :src="comment.author.avatarUrl" alt="User Avatar" />
            <div class="flex items-center pt-1 text-300 leading-6">
              {{ comment.author.login }}
            </div>
          </a>

          <!-- Comment Text -->
          <!-- eslint-disable vue/no-v-html -->
          <div class="text-grey-100 w-full text-300 font-normal" v-html="DOMPurify.sanitize(comment.body)" />
          <!--eslint-enable-->

          <!-- Comment Footer -->
          <div class="flex flex-row text-grey-100 justify-between text-300">
            <div>{{ comment.createdAtHuman }}</div>
            <div class="flex flex-row gap-6">
              <!-- GithHub Link -->
              <a :href="comment.url" target="_blank" class="hover:opacity-50">View on GitHub</a>
              <!-- Upvote -->
              <div
                :class="isLoggedIn ? ['cursor-pointer'] : []"
                class="flex flex-row items-center ml-auto hover:opacity-50 gap-1"
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
      <button class="p-2 w-32 bg-green-600 text-light rounded-md text-sm mt-2" @click="refresh">Retry?</button>
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

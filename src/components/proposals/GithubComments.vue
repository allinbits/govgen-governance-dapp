<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import DOMPurify from "dompurify";

import { useGithubDiscusser } from "@/composables/useGithubDiscusser";
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";

import CommonButton from "@/components/ui/CommonButton.vue";
import DropDown from "@/components/ui/DropDown.vue";

const props = defineProps<{ term: string }>();

const { logout, isLoggedIn, login, username, avatar } = useGithubDiscussions();
const { comments, refresh, postMessage, postUpvote, isPosting, isFailing, isLoaded } = useGithubDiscusser(props.term);

const sortingList = ["Popular", "Oldest", "Latest"];
const sortingType = ref(0);

const commentInput = ref<string>("");

function handleSortingChange(index: number) {
  sortingType.value = index;
}

async function createPost() {
  if (isPosting.value) {
    return;
  }

  if (!isLoggedIn) {
    return;
  }

  const didPost = await postMessage(commentInput.value);
  if (!didPost) {
    window.alert("Failed to post comment");
    return;
  }

  commentInput.value = "";
}

const sortedComments = computed(() => {
  let commentList = [...comments.value];

  switch (sortingType.value) {
    // Popular
    case 0:
      commentList.sort((a, b) => b.upvotes - a.upvotes);
      break;
    // Oldest
    case 1:
      commentList.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());

      break;
    // Latest
    case 2:
      commentList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
  }

  return commentList;
});

onMounted(refresh);
</script>

<template>
  <div class="flex flex-col w-full gap-[72px] pt-[72px]">
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
          @click="createPost"
        >
          Post Comment
        </CommonButton>
      </div>
    </div>

    <!-- Comments -->
    <div v-if="isLoaded" class="flex flex-col w-full">
      <div class="flex flex-row w-full justify-between items-center mb-8">
        <div class="text-500 font-medium">Proposal Discussions</div>
        <DropDown v-model="sortingType" :values="sortingList" @select="handleSortingChange" />
      </div>
      <div class="flex flex-col gap-6">
        <!-- Comments -->
        <div
          v-for="(comment, index) in sortedComments"
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
    <div v-if="!isLoaded || isFailing" class="flex flex-col gap-6 w-full flex-wrap pt-8">
      <div
        v-for="index in 6"
        :key="index"
        class="flex flex-col py-10 px-8 rounded-2xl w-full bg-grey-400 rounded-md animate-pulse gap-8"
      >
        <!-- Unloaded Avatar -->
        <div class="rounded-circle w-10 h-10 bg-grey-200" />
        <!-- Unloaded Content -->
        <div class="flex flex-col gap-4 w-full">
          <div v-for="refIndex in 3" :key="refIndex" class="bg-grey-200 rounded-sm w-full h-4" />
        </div>
        <!-- Unloaded Footer -->
        <div :key="index" class="bg-grey-200 rounded-sm w-1/4 h-4" />
      </div>
    </div>
  </div>
</template>

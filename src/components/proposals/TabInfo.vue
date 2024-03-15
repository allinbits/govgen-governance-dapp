<script lang="ts" setup>
import { useRoute } from "vue-router";
import GithubLinks from "@/components/proposals/GithubLinks.vue";

const route = useRoute();
const term = `Links #${route.params.id}`;
</script>

<template>
  <div class="flex flex-col gap-6">
    <GithubLinks :term="term" />
  </div>
</template>

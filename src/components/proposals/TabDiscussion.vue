<script lang="ts" setup>
import { useRoute } from "vue-router";
import GithubComments from "@/components/proposals/GithubComments.vue";

const route = useRoute();
const term = `Proposal #${route.params.id}`;
</script>

<template>
  <div class="w-full lg:w-2/3"><GithubComments :term="term" /></div>
</template>

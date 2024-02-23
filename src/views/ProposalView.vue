<script setup lang="ts">
import { useRoute } from "vue-router";
import GithubComments from "../components/GithubComments.vue";

const route = useRoute();
const term = `Proposal #${route.params.id}`;
</script>

<template>
  <div>
    <div class="mb-2 font-medium">Proposal {{ route.params.id }}</div>
    <GithubComments :term="term" />
  </div>
</template>

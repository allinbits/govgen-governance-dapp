<script setup lang="ts">
import { useRoute } from "vue-router";
import GithubComments from "../components/GithubComments.vue";

const route = useRoute();
const commentPath = `Proposal #${route.params.id}`;
</script>

<template>
  <div>
    <GithubComments :path="commentPath" />
    {{ route.params.id }}
  </div>
</template>

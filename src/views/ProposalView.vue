<script setup lang="ts">
import { useRoute } from "vue-router";
import GithubComments from "../components/proposals/GithubComments.vue";
import GithubLinks from "../components/proposals/GithubLinks.vue";

const route = useRoute();
const proposalTerm = `Proposal #${route.params.id}`;
const linksTerm = `Links #${route.params.id}`;
</script>

<template>
  <div>
    <div class="mb-2 font-medium text-3xl">Proposal {{ route.params.id }}</div>
    <GithubLinks :term="linksTerm" />
    <GithubComments :term="proposalTerm" />
  </div>
</template>

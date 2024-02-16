<script setup lang="ts">
import { useRoute } from "vue-router";
import GiscusComments from "../components/GiscusComments.vue";
import GiscusLinks from "../components/GiscusLinks.vue";

const route = useRoute();
const commentPath = `Proposal #${route.params.id}`;
</script>

<template>
  <div>
    <GiscusLinks :path="commentPath" />
    <GiscusComments :path="commentPath" />
    {{ route.params.id }}
  </div>
</template>

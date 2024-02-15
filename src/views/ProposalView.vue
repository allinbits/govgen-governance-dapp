<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const commentPath = `Proposal #${route.params.id}`;
</script>

<template>
  <div>
    <GiscusComments :path="commentPath" />
    {{ route.params.id }}
  </div>
</template>

<script lang="ts" setup>
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import { onMounted, ref } from "vue";

const props = defineProps<{ proposal: number }>();
const count = ref(0);
const { getDiscussionCommentCount } = useGithubDiscussions();

onMounted(async () => {
  const response = await getDiscussionCommentCount({ term: `Proposal #${props.proposal}` });
  count.value = response.count;
});
</script>

<template>
  <span>{{ count }}</span>
</template>

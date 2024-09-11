<script lang="ts" setup>
import { bus } from "@/bus";
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import { onMounted, ref } from "vue";

const props = defineProps<{ proposal: number }>();
const count = ref(0);
const { getDiscussionCommentCount } = useGithubDiscussions();

onMounted(async () => {
  try {
    const response = await getDiscussionCommentCount({ term: `Proposal #${props.proposal}` });
    count.value = response.count;
  } catch (e) {
    bus.emit("error", e);
  }
});
</script>

<template>
  <span>{{ count }}</span>
</template>

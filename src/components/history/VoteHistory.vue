<script setup lang="ts">
import { useChainData } from "@/composables/useChainData";
const props = defineProps<{
  address: string;
}>();
const { getVoteHistory } = useChainData();

const history = getVoteHistory(props.address);
</script>
<template>
  <div>{{ history }}</div>
</template>

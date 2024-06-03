<script setup lang="ts">
import { useChainData } from "@/composables/useChainData";
import { totalAmounts } from "@/utility";
const { height, address } = defineProps<{ timestamp: number; address: string }>();
const { getDelegated } = useChainData();

const delegated = getDelegated(address, height);

/*
const displayStake = computed(() => {
  return timestamp.value ? dayjs(timestamp.value.block[0].timestamp).format("MMMM D, YYYY h:mm A") : "-";
});
*/
</script>
<template>
  <span>{{ totalAmounts(delegated?.action_delegation_total?.coins ?? []) }}</span>
</template>

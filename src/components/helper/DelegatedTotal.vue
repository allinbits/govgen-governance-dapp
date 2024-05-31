<script setup lang="ts">
import { useChainData } from "@/composables/useChainData";
import dayjs from "dayjs";
import { computed } from "vue";

const { height, address } = defineProps<{ height: number; address: string }>();
const { getDelegated } = useChainData();

const delegated = getDelegated(address, height);

const displayStake = computed(() => {
  return timestamp.value ? dayjs(timestamp.value.block[0].timestamp).format("MMMM D, YYYY h:mm A") : "-";
});
</script>
<template>
  <span>{{ displayDate }}</span>
</template>

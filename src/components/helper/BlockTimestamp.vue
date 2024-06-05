<script setup lang="ts">
import { useChainData } from "@/composables/useChainData";
import dayjs from "dayjs";
import { computed } from "vue";

const { height } = defineProps<{ height: number }>();
const { getBlockTime } = useChainData();

const timestamp = getBlockTime(height);

const displayDate = computed(() => {
  return timestamp.value ? dayjs(timestamp.value.block[0].timestamp).format("MMMM D, YYYY h:mm A") : "-";
});
</script>
<template>
  <span>{{ displayDate }}</span>
</template>

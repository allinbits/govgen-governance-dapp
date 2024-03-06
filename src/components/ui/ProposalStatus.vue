<script lang="ts" setup>
import { computed } from "vue";
import { capitalizeFirstLetter } from "@/utility/index";

const { status } = defineProps<{ status: "voting" | "passed" | "rejected" | "failed" }>();

const colors = {
  voting: "fill-accent-100",
  passed: "fill-accent-100",
  rejected: "fill-neg-200",
  failed: "fill-neg-200",
};

const iconColor = computed(() => {
  if (!colors[status]) {
    return "fill-neg-200";
  }

  return colors[status];
});
</script>

<template>
  <div class="flex flex-row gap-2 items-center text-100 font-medium">
    <Icon icon="circle" class="w-2 h-2" :class="iconColor" /><span>{{ capitalizeFirstLetter(status) }}</span>
  </div>
</template>

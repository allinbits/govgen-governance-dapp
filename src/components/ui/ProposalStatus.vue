<script lang="ts" setup>
import { computed } from "vue";
import { capitalizeFirstLetter } from "@/utility/index";

const { status } = defineProps<{ status: "voting" | "passed" | "rejected" | "failed" }>();

const colors = {
  voting: ["fill-accent-100", "text-accent-100"],
  passed: ["fill-accent-100", "text-accent-100"],
  rejected: ["fill-neg-200", "text-neg-200"],
  failed: ["fill-neg-200", "text-neg-200"],
};

const textColor = computed(() => {
  return colors[status];
});

const iconClasses = computed(() => {
  if (!colors[status]) {
    return ["fill-neg-200", "w-2", "h-2"];
  }

  const classes = [colors[status]];

  if (status === "voting") {
    classes.push("w-4");
    classes.push("h-4");
    classes.push("animate-spin");
  } else {
    classes.push("w-2");
    classes.push("h-2");
  }

  return classes;
});

const iconType = computed(() => {
  if (status === "voting") {
    return "progress";
  }

  return "circle";
});
</script>

<template>
  <div class="flex flex-row gap-2 items-center text-100 font-medium" :class="textColor">
    <Icon :icon="iconType" :class="iconClasses" /><span>{{ capitalizeFirstLetter(status) }}</span>
  </div>
</template>

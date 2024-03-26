<script lang="ts" setup>
import { computed } from "vue";
import { capitalizeFirstLetter } from "@/utility/index";
import { PropStatus } from "@/types/proposals";

const { status } = defineProps<{ status: PropStatus }>();

const colors = {
  deposit: ["fill-accent-200", "text-accent-200"],
  voting: ["fill-accent-100", "text-accent-100"],
  passed: ["fill-accent-100"],
  rejected: ["fill-neg-200"],
  failed: ["fill-neg-200"],
  unspecified: ["fill-neg-200", "text-neg-200"],
};

const textColor = computed(() => {
  return colors[status];
});

const iconClasses = computed(() => {
  if (!colors[status]) {
    return ["fill-neg-200", "w-2", "h-2"];
  }

  const classes: string[] = [...colors[status]];

  if (status === PropStatus.PROPOSAL_STATUS_VOTING_PERIOD || status === PropStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD) {
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
  if (status === PropStatus.PROPOSAL_STATUS_VOTING_PERIOD || status === PropStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD) {
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

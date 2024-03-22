<script setup lang="ts">
import { ContextTypes } from "@/types/ui";
import { computed } from "vue";
import Icon from "@/components/ui/Icon.vue";

const { type, icon } = defineProps<{ type: ContextTypes; icon?: string }>();

const colorClasses = computed(() => {
  switch (type) {
    case ContextTypes.INFO:
      return "bg-badge-info text-accent-100";
    case ContextTypes.SUCCESS:
      return "bg-badge-info text-accent-100";
    case ContextTypes.FAIL:
      return "bg-badge-fail text-neg-200";
    case ContextTypes.PLAIN:
    default:
      return "bg-badge-plain text-light";
  }
});
</script>
<template>
  <div
    class="inline-flex rounded-full text-100 w-auto align-center justify-center py-3 px-4 gap-1.5 items-stretch"
    :class="colorClasses"
  >
    <Icon v-if="icon" :icon="icon" />
    <slot />
  </div>
</template>

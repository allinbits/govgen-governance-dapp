<script lang="ts" setup>
import { computed } from "vue";

import UiIcon from "./Icon.vue";

interface Props {
  type?: "info" | "warning" | "danger" | "success" | "content";
  title: number | string;
  icon?: string;
  circled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "success",
  icon: undefined,
  circled: false,
});

const defaultIcons = {
  info: "warning",
  warning: "warning",
  danger: "danger",
  success: "check",
  content: "warning",
} as const;

const infoType = [props.type === "success" && "bg-gradient text-dark"];
const ico = computed<string>(() => (props.icon !== undefined ? props.icon : defaultIcons[props.type]));
const isCircled = computed<boolean>(() => props.circled || props.type === "success");
</script>

<template>
  <div class="text-center">
    <div v-if="props.type !== 'content'" class="flex justify-center mb-8">
      <div class="rounded-full flex justify-center p-4" :class="infoType">
        <UiIcon :icon="ico" :size="isCircled ? 3.5 : 1" :gradient="type === 'warning'" />
      </div>
    </div>
    <h1 class="text-500 font-semibold">{{ title }}</h1>
    <div class="">
      <slot />
    </div>
  </div>
</template>

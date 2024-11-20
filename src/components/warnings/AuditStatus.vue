<script lang="ts" setup>
import { useLocalStorage } from "@vueuse/core";

import Icon from "@/components/ui/Icon.vue";

const isSecurityHeaderVisible = useLocalStorage("security-popup", true);
const props = defineProps<{ link: string }>();

function hideSecurityLabel() {
  isSecurityHeaderVisible.value = false;
}
</script>

<template>
  <div
    v-if="isSecurityHeaderVisible"
    class="flex flex-row justify-between items-start bg-red-200 w-full py-5 px-5 rounded text-red-400 text-300 gap-8 mb-2"
  >
    <div class="flex flex-col gap-4">
      <span class="text-justify">{{ $t("homepage.auditStatus") }}</span>
      <Icon icon="link" :size="1">
        <a :href="props.link" target="_blank" class="font-bold">{{ $t("homepage.viewAuditStatus") }}</a>
      </Icon>
    </div>
    <button class="hover:opacity-50" @click="hideSecurityLabel">
      <Icon icon="close" :size="2" />
    </button>
  </div>
</template>

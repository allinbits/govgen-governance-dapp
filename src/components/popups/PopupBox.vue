<script setup lang="ts">
import ModalWrap from "@/components/common/ModalWrap.vue";

const props = defineProps<{ title?: string }>();
const visible = defineModel<boolean>({ default: false });
const emits = defineEmits<{ (e: "close"): void }>();
</script>
<template>
  <ModalWrap :visible="visible" :is-empty="true" @back="emits('close')">
    <div id="popup-box" class="bg-grey-200 w-[90vw] md:max-w-[75vw] rounded-md">
      <div class="flex flex-row w-full bg-grey-400 p-6 rounded-tl-md rounded-tr-md justify-between items-center">
        <span>{{ props.title ?? "Popup" }}</span>
        <Icon icon="close" class="text-400 hover:opacity-50 cursor-pointer" @click="emits('close')" />
      </div>
      <div ref="content" class="max-h-[75vh] overflow-y-auto w-full overflow-x-hidden">
        <slot></slot>
      </div>
    </div>
  </ModalWrap>
</template>

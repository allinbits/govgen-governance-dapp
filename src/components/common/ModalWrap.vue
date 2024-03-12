<script lang="ts" setup>
const emits = defineEmits<{ (e: "back"): void }>();
const props = defineProps<{ text?: string; visible: boolean }>();
</script>

<template>
  <div
    v-if="props.visible"
    class="fixed top-0 left-0 w-full z-50 overflow-y-auto overflow-x-hidden flex justify-center h-full lg:h-auto"
  >
    <div class="bg-white p-12 w-full lg:w-1/2 drop-shadow-md block m-0 lg:m-4 rounded-md">
      <div class="flex pb-6">
        <button class="px-4 py-2 bg-gray-600 text-light rounded" @click="emits('back')">
          {{ props.text ? props.text : "Back" }}
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

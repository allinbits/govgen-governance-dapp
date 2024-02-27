<script lang="ts" setup>
const emits = defineEmits<{ (e: "back"): void }>();
const props = defineProps<{ text?: string; visible: boolean }>();
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full z-50 overflow-y-auto overflow-x-hidden flex justify-center h-full lg:h-auto"
    v-if="props.visible"
  >
    <div class="bg-white p-12 w-full lg:w-1/2 drop-shadow-md block m-0 lg:m-4 rounded-md">
      <div class="flex pb-6">
        <button @click="emits('back')" class="px-4 py-2 bg-gray-600 text-white rounded">
          {{ props.text ? props.text : "Back" }}
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits<{ (e: "back"): void }>();

interface Props {
  text?: string;
  visible: boolean;
  isEmpty?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  text: "Back",
  visible: false,
  isEmpty: false,
});
</script>

<template>
  <div v-if="props.visible" class="fixed top-0 left-0 right-0 bottom-0 bg-darkblur backdrop-blur-md"></div>
  <div
    v-if="props.visible"
    class="fixed top-0 left-0 w-full overflow-y-auto overflow-x-hidden flex justify-center h-full lg:h-auto z-max"
  >
    <div class="bg-white p-12 w-full lg:w-1/2 drop-shadow-md block m-0 lg:m-4 rounded-md">
      <div v-if="!isEmpty" class="flex pb-6">
        <button class="px-4 py-2 bg-gray-600 text-white rounded" variant="empty" @click="emits('back')">
          {{ props.text ? props.text : "Back" }}
        </button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

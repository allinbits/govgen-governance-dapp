<script lang="ts" setup>
interface Props {
  visible: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  visible: false,
});
</script>

<template>
  <Transition>
    <div v-if="props.visible" class="fixed top-0 left-0 right-0 bottom-0 bg-darkblur backdrop-blur-md"></div>
  </Transition>
  <Transition>
    <div v-if="props.visible" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-max">
      <div class="bg-white w-full rounded-md max-h-screen overflow-auto">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

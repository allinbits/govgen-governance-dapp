<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{ title?: string }>();
const emits = defineEmits<{ (e: "close"): void }>();
const visible = defineModel<boolean>();

const content = ref<HTMLElement | null>(null);
const frame = ref<HTMLElement | null>(null);
const tl = (dir = true, cb: () => void) => {
  if (!content.value || !frame.value) return;

  const modContent = content.value.animate([{ opacity: "0" }, { opacity: "1" }], {
    fill: "both",
    duration: 400,
    easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    delay: dir ? 250 : 0,
  });
  modContent.pause();

  const modBg = frame.value.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], {
    fill: "both",
    duration: 400,
    easing: "cubic-bezier(0.42, 0, 0.58, 1)",
    delay: dir ? 0 : 200,
  });
  modBg.pause();

  modContent.playbackRate = dir ? 1 : -1;
  modBg.playbackRate = dir ? 1 : -1;

  if (dir) modContent.play();
  modBg.play();

  (dir ? modContent : modBg).onfinish = () => cb();
};
</script>

<template>
  <Transition name="bg">
    <div v-if="visible" class="fixed top-0 left-0 right-0 bottom-0 bg-darkblur backdrop-blur-md z-max"></div>
  </Transition>
  <Transition :css="false" @enter="(_, done) => tl(true, done)" @leave="(_, done) => tl(false, done)">
    <div
      v-show="visible"
      ref="frame"
      class="fixed flex items-center justify-center z-max origin-center w-screen h-screen top-0 left-0"
    >
      <div class="bg-grey-200 w-[90vw] md:max-w-[75vw] rounded-md">
        <div class="flex flex-row w-full bg-grey-400 p-6 rounded-tl-md rounded-tr-md justify-between items-center">
          <span>{{ props.title ?? "Popup" }}</span>
          <Icon icon="close" class="text-400 hover:opacity-50 cursor-pointer" @click="emits('close')" />
        </div>
        <div ref="content" class="max-h-[75vh] overflow-y-auto w-full overflow-x-hidden">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.bg-enter-active,
.bg-leave-active {
  transition: opacity 0.4s ease;
}

.bg-enter-from,
.bg-leave-to {
  opacity: 0;
}
</style>

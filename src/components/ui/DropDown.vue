<script lang="ts" setup>
import { ref, computed } from "vue";

const model = defineModel<number>({ required: true });

const props = defineProps<{ values: string[] }>();
const emits = defineEmits<{ (e: "select", value: number): void }>();
const open = ref<boolean>(false);

function handleSelect(index: number) {
  open.value = false;
  emits("select", index);
}

const currentValues = computed(() => {
  const values: { name: string; index: number }[] = [];
  for (let i = 0; i < props.values.length; i++) {
    if (i === model.value) {
      continue;
    }

    values.push({ name: props.values[i], index: i });
  }

  return values;
});
</script>

<template>
  <div class="relative flex flex-col min-w-56 select-none">
    <Transition name="bg">
      <div
        v-show="open"
        :class="open && ['fixed w-screen h-screen top-0 left-0 z-[999] bg-darkblur backdrop-blur-xs']"
        @click="open = false"
      ></div>
    </Transition>
    <div
      class="relative bg-grey-400 duration-200"
      :class="open ? ['z-max rounded-t ease-in'] : ['rounded hover:bg-grey-200 delay-300 ease-out']"
    >
      <div class="flex flex-row justify-between cursor-pointer gap-3 px-5 py-4" @click="open = !open">
        <div>{{ props.values[model] }}</div>
        <Icon icon="CaretDown" />
      </div>
      <Transition name="drop">
        <div
          v-if="open"
          class="flex flex-col absolute origin-top top-full min-w-56 left-0 w-full z-50 text-left px-5 pb-2 bg-grey-200 rounded-b"
        >
          <div
            v-for="(data, index) in currentValues"
            :key="index"
            :class="model === index ? ['selected'] : []"
            class="cursor-pointer py-3 hover:text-grey-50 text-200"
            @click="handleSelect(data.index)"
          >
            {{ data.name }}
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.drop-enter-active,
.drop-leave-active {
  transition:
    transform 0.3s ease,
    color 0.15s ease;
  transition-delay: 180ms;
}

.drop-enter-from,
.drop-leave-to {
  transform: scaleY(0);
  color: transparent;
  transition-delay: 0ms;
}

.bg-enter-active,
.bg-leave-active {
  transition: opacity 0.3s ease;
}

.bg-enter-from,
.bg-leave-to {
  opacity: 0;
}
</style>

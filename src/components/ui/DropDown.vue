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
    <Transition>
      <div
        v-show="open"
        :class="open && ['fixed w-screen h-screen top-0 left-0 z-[999] bg-darkblur backdrop-blur-xs']"
        @click="open = false"
      ></div>
    </Transition>
    <div class="relative bg-grey-400 duration-150" :class="open ? ['z-max rounded-t'] : ['rounded hover:bg-grey-200']">
      <div class="flex flex-row justify-between cursor-pointer gap-3 px-5 py-4" @click="open = !open">
        <div>{{ props.values[model] }}</div>
        <Icon icon="CaretDown" />
      </div>
      <Transition>
        <div
          v-if="open"
          class="flex flex-col absolute top-[calc(1rlh+1lh)] min-w-56 left-0 w-full z-50 text-left px-5 pb-2 bg-grey-200 rounded-b"
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

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
  <div
    class="flex flex-col relative bg-grey-300 min-w-56 max-w-56 select-none"
    :class="open ? ['rounded-t'] : ['rounded']"
  >
    <div class="flex flex-row justify-between cursor-pointer gap-3 text-200 px-5 py-4" @click="open = !open">
      <div>{{ props.values[model] }}</div>
      <Icon icon="CaretDown" />
    </div>
    <div
      v-if="open"
      class="flex flex-col absolute top-[52px] min-w-56 left-0 z-50 text-left px-5 pb-2 bg-grey-200 rounded-b"
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
  </div>
</template>

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
  <div class="flex flex-col px-2 py-4 relative">
    <div @click="open = !open" class="flex flex-row justify-between cursor-pointer">
      <div>{{ props.values[model] }}</div>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M13.4619 5.80865C13.4241 5.71729 13.36 5.6392 13.2778 5.58426C13.1956 5.52932 13.0989 5.5 13 5.5H3C2.90111 5.5 2.80444 5.52932 2.72221 5.58427C2.63999 5.63921 2.5759 5.7173 2.53806 5.80866C2.50022 5.90003 2.49031 6.00056 2.50961 6.09755C2.5289 6.19455 2.57653 6.28364 2.64646 6.35356L7.64646 11.3535C7.69288 11.4 7.748 11.4368 7.80866 11.4619C7.86932 11.4871 7.93434 11.5 8 11.5C8.06566 11.5 8.13068 11.4871 8.19134 11.4619C8.252 11.4368 8.30712 11.4 8.35355 11.3535L13.3535 6.35356C13.4235 6.28364 13.4711 6.19454 13.4904 6.09755C13.5097 6.00056 13.4998 5.90002 13.4619 5.80865Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="flex flex-col absolute top-11 z-50" v-if="open">
      <div
        v-for="(data, index) in currentValues"
        :key="index"
        :class="model === index ? ['selected'] : []"
        @click="handleSelect(data.index)"
        class="cursor-pointer"
      >
        {{ data.name }}
      </div>
    </div>
  </div>
</template>

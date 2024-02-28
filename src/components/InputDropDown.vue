<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{ index: number; values: string[] }>();
const emits = defineEmits<{ (e: "select", value: number): void }>();
const open = ref<boolean>(false);

function handleSelect(index: number) {
  open.value = false;
  emits("select", index);
}
</script>

<template>
  <div class="flex flex-col">
    <template v-if="!open">
      <div @click="open = true">{{ props.values[props.index] }}</div>
    </template>
    <template v-else>
      <div
        v-for="(text, index) in props.values"
        :key="index"
        :class="props.index === index ? ['selected'] : []"
        @click="handleSelect(index)"
      >
        {{ text }}
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { ref, useSlots } from "vue";

const text = defineModel<string>({ required: true });
const slots = useSlots();
const input = ref();
const focused = ref(false);

function focus() {
  input.value.focus();
  focused.value = true;
}

function unfocus() {
  focused.value = false;
}
</script>

<template>
  <div
    class="flex flex-row gap-2 p-4 items-center border border-grey-200 bg-grey-300 rounded hover:border-grey-100 cursor-text"
    :class="focused ? ['!border-grey-50'] : ['']"
    @click="focus"
  >
    <div v-if="slots.default" class="flex w-4 h-4 text-grey-100">
      <slot></slot>
    </div>
    <input
      ref="input"
      v-model="text"
      type="text"
      :placeholder="$t('components.Search.placeholder')"
      class="outline-none bg-transparent placeholder:text-grey-100 items-center text-200"
      @blur="unfocus"
    />
  </div>
</template>

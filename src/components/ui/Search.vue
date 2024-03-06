<script lang="ts" setup>
import { ref, useSlots } from "vue";

const text = defineModel({ required: true });
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
    @click="focus"
    class="flex flex-row gap-2 p-4 items-center border border-grey-200 bg-grey-300 rounded hover:border-grey-100"
    :class="focused ? ['!border-grey-50'] : ['']"
  >
    <div class="flex w-4 h-4 text-grey-100" v-if="slots.default">
      <slot></slot>
    </div>
    <input
      ref="input"
      type="text"
      placeholder="Search Proposal"
      v-model="text"
      class="outline-none bg-transparent placeholder:text-grey-100 items-center text-200"
      @blur="unfocus"
    />
  </div>
</template>

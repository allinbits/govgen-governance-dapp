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
    class="flex flex-row gap-3 p-4 items-center border border-transparent"
    :class="focused ? ['border-gray-600'] : ['']"
  >
    <div class="pr-2" v-if="slots.default">
      <slot></slot>
    </div>
    <input ref="input" type="text" placeholder="Search Proposal" v-model="text" class="outline-none" @blur="unfocus" />
  </div>
</template>

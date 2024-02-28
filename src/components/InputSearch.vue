<script lang="ts" setup>
import { ref } from "vue";

const props = defineProps<{ text: string }>();
const emits = defineEmits<{ (e: "submit", content: string): void; (e: "onUpdate", content: string): void }>();

const text = ref<string>(props.text);
</script>

<template>
  <div class="flex flex-row gap-3">
    <div>Icon</div>
    <input
      type="text"
      placeholder="Search Proposal"
      v-model="text"
      @keyup.enter="emits('submit', props.text)"
      @input="emits('onUpdate', text)"
    />
  </div>
</template>

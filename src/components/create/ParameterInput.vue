<script lang="ts" setup>
import { ref, watch } from "vue";

const model = defineModel<{ key: string; value: string; subspace: string }>();
const props = defineProps<{ disabled: boolean }>();

const key = ref<string>("");
const value = ref<string>("");
const subspace = ref<string>("");

watch(key, async (newValue) => {
  if (!model.value) {
    return;
  }

  model.value.key = newValue;
});

watch(value, async (newValue) => {
  if (!model.value) {
    return;
  }

  model.value.value = newValue;
});

watch(subspace, async (newValue) => {
  if (!model.value) {
    return;
  }

  model.value.subspace = newValue;
});
</script>

<template>
  <div class="flex flex-col gap-6">
    <input
      v-model="key"
      placeholder="key"
      type="text"
      class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
      :disabled="props.disabled"
    />
    <input
      v-model="value"
      placeholder="value"
      type="text"
      class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
      :disabled="props.disabled"
    />
    <input
      v-model="subspace"
      placeholder="subspace"
      type="text"
      class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
      :disabled="props.disabled"
    />
  </div>
</template>

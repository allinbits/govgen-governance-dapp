<script lang="ts" setup>
import { ref, watch } from "vue";
import { defineModel } from "vue";

const model = defineModel<{ key: string; value: string; subspace: string }>();

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
      placeholder="key"
      v-model="key"
      type="text"
      class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
    />
    <input
      placeholder="value"
      v-model="value"
      type="text"
      class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
    />
    <input
      placeholder="subspace"
      v-model="subspace"
      type="text"
      class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
    />
  </div>
</template>

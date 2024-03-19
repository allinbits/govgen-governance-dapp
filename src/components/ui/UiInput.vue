<template>
  <label
    v-bind="$attrs"
    class="z-1 relative flex gap-3"
    :class="variant === 'col' ? 'flex-col' : 'flex-row items-center'"
  >
    <div class="grow-0">{{ label }}</div>
    <input
      v-model="model"
      :placeholder="placeholder"
      class="rounded bg-grey-300 p-4 outline-none border border-transparent focus:border-light w-full"
      :class="variant === 'row' && 'max-w-32'"
      :type="type"
      :min="type === 'number' ? min : undefined"
      :max="type === 'number' ? max : undefined"
      @focus="focusHandler(true)"
      @blur="focusHandler(false)"
    />
  </label>
  <Transition
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <p v-if="isError" class="text-body-reg text-red-300 mt-4">{{ errorMessage }}</p>
  </Transition>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

interface Props {
  modelValue: string | number | null;
  type?: string;
  variant?: "col" | "row";
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  min?: number;
  max?: number;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  type: "text",
  variant: "col",
  label: "",
  placeholder: "",
  isError: false,
  errorMessage: "Input Error",
  min: 0,
  max: 1,
  icon: null,
});

const focused = ref(false);

const emit = defineEmits(["update:modelValue", "focus"]);
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const focusHandler = (isFocused: boolean) => {
  emit("focus", isFocused);
  focused.value = isFocused;
};

//TODO: error system
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>

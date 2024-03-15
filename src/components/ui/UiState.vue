<template>
  <label
    class="relative inline-flex items-center cursor-pointer px-6 py-4"
    :class="
      modelValue === value &&
      'before:absolute before:left-0 before:top-0 before:w-full before:h-full before:rounded before:bg-grey-200'
    "
  >
    <span
      class="relative inline-flex h-6 w-6 border border-light overflow-hidden"
      :class="type === 'radio' ? 'rounded-circle' : 'rounded-sm'"
    >
      <input v-model="model" :value="value" class="peer w-0 h-0" :type="type" />
      <span
        class="absolute z-2 flex w-full h-full bg-gradient rounded-circle scale-0 transition-transform duration-200"
        :class="
          type === 'radio'
            ? 'peer-checked:!scale-[.8] peer-hover:scale-[.35] peer-focus-visible:scale-[.35]'
            : 'peer-checked:scale-150 peer-hover:scale-[1.25] peer-focus-visible:scale-[1.25]'
        "
      ></span>
      <Icon
        v-if="type === 'checkbox'"
        icon="check"
        :size="1"
        container="small"
        class="delay-0 duration-200 clip-hidden peer-checked:duration-500 peer-checked:clip-display absolute w-full h-full p-1 text-grey-900"
      />
    </span>
    <slot>
      <span v-if="label" class="ml-2 z-2">{{ label }}</span>
    </slot>
  </label>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Icon from "./Icon.vue";

interface Props {
  type: "checkbox" | "radio";
  modelValue?: boolean | boolean[] | string;
  value?: number | string;
  label?: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  value: undefined,
  label: "",
});

if (props.type === "radio" && !props.value) {
  throw new Error('Radio type needs "value" prop to be set');
}
const emit = defineEmits(["update:modelValue"]);
const model = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});
</script>

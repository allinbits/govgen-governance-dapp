<script lang="ts" setup>
const props = defineProps<{ disabled?: boolean }>();
</script>

<template>
  <button
    class="px-6 py-4 rounded-md text-200 font-medium"
    :class="
      props.disabled
        ? ['bg-grey-500', 'text-grey-100', 'hover:cursor-auto']
        : ['bg-grey-400', 'text-light', 'hover:text-grey-50', 'hover:cursor-pointer']
    "
  >
    <slot></slot>
  </button>
</template>

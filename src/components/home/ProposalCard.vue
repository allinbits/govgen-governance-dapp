<script lang="ts" setup>
const { link } = defineProps<{ link: string }>();
</script>

<template>
  <router-link :to="link" class="flex flex-col gap-14 px-8 py-6 bg-grey-300 rounded hover:bg-grey-200">
    <div class="flex flex-row justify-end text-100">
      <slot name="header"></slot>
    </div>
    <div class="flex flex-col text-grey-100 text-300 font-medium">
      <slot name="number"></slot>
      <div class="flex flex-col text-[white] text-500 font-semibold text-left">
        <slot></slot>
      </div>
    </div>
    <div class="flex flex-row">
      <slot name="footer"></slot>
    </div>
  </router-link>
</template>

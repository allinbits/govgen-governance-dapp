<script lang="ts" setup>
const emits = defineEmits<{ (e: "close"): void }>();
</script>

<template>
  <div class="flex mt-24 justify-center fixed top-0 w-full">
    <div class="shadow-lg p-4 w-96 h-96 bg-white rounded-lg">
      <p>Wallet Selector...</p>
      <button @click="emits('close')">Close</button>
    </div>
  </div>
</template>

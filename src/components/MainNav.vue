<script lang="ts" setup>
const emits = defineEmits<{ (e: "open"): void }>();
</script>

<template>
  <nav class="h-24 p-4">
    <div class="relative flex items-center justify-between">
      <div class="flex">
        <router-link to="/" class="font-bold text-3xl">GovGen</router-link>
        <div class="flex flex-row gap-8 items-center pl-20">
          <router-link to="/">Proposals</router-link>
          <router-link to="/">Guides</router-link>
        </div>
      </div>
      <div>
        <button @click="emits('open')">Connect</button>
      </div>
    </div>
  </nav>
</template>

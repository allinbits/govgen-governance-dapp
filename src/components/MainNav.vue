<script lang="ts" setup>
const emits = defineEmits<{ (e: "open"): void }>();
</script>

<template>
  <header>
    <nav class="flex flex-row justify-between items-center py-4 w-full select-none">
      <router-link to="/" class="text-400 font-termina">GovGen</router-link>
      <div @click="emits('open')" class="justify-center px-6 py-4 rounded bg-grey-400 text-300 cursor-pointer">
        Connect Wallet
      </div>
    </nav>
  </header>
</template>

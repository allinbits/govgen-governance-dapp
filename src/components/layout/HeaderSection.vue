<script lang="ts" setup>
import WalletConnect from "@/components/popups/WalletConnect.vue";
</script>

<template>
  <header>
    <nav class="flex flex-row justify-between items-center py-4 w-full select-none relative">
      <router-link to="/" class="text-500 font-termina py-4">GovGen</router-link>
      <WalletConnect class="hidden md:block" />
    </nav>
  </header>
</template>

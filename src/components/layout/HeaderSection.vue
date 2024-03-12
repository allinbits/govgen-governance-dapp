<script lang="ts" setup>
import WalletConnect from "../popups/WalletConnect.vue";
</script>

<template>
  <header>
    <nav class="flex flex-row justify-between items-center py-4 w-full select-none relative">
      <router-link to="/" class="text-400 font-termina py-4">GovGen</router-link>
      <WalletConnect />
    </nav>
  </header>
</template>

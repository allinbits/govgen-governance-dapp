<script lang="ts" setup>
import WalletConnect from "@/components/popups/WalletConnect.vue";
</script>

<template>
  <header>
    <nav class="flex flex-row justify-between md:items-center py-4 w-full select-none relative">
      <div class="flex flex-col md:flex-row justify-start gap-x-8 md:items-center select-none relative">
        <router-link to="/" class="text-500 font-termina py-4">{{ $t("homepage.title") }}</router-link>
      </div>
      <WalletConnect class="hidden md:block" />
    </nav>
  </header>
</template>

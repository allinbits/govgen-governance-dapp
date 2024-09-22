<script lang="ts" setup>
import WalletConnect from "@/components/popups/WalletConnect.vue";
</script>

<template>
  <header>
    <nav class="flex flex-row justify-between md:items-center py-4 w-full select-none relative">
      <div class="flex flex-col md:flex-row justify-start gap-x-8 md:items-center select-none relative">
        <router-link to="/" class="text-500 font-termina py-4">{{ $t("homepage.title") }}</router-link>
        <div class="flex flex-row gap-4 md:gap-4 items-center">
          <router-link active-class="text-light" to="/" class="text-300 py-4 hover:text-light text-grey-100">{{
            $t("homepage.viewProposals")
          }}</router-link>
          <router-link active-class="text-light" to="/history" class="text-300 py-4 hover:text-light text-grey-100">{{
            $t("homepage.viewHistory")
          }}</router-link>
          <router-link active-class="text-light" to="/faq" class="text-300 py-4 hover:text-light text-grey-100">{{
            $t("homepage.viewFaq")
          }}</router-link>
          <a
            target="_blank"
            href="https://commonwealth.im/govgen"
            class="text-300 py-4 hover:text-light text-grey-100"
            >{{ $t("homepage.viewForums") }}</a
          >
        </div>
      </div>
      <WalletConnect class="hidden md:block" />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
import WalletSelector from "./components/WalletSelector.vue";
import { useGithubDiscussions } from "./composables/useGithubDiscussions";
import ModalWrap from "./components/ModalWrap.vue";
import FooterSection from "./components/FooterSection.vue";

const isConnectingWallet = ref(false);

useGithubDiscussions().setup();
</script>

<template>
  <div class="w-full max-w-[90rem] px-6 md:px-14 lg:px-20 mx-auto">
    <MainNav @open="isConnectingWallet = true" />
    <ModalWrap :visible="isConnectingWallet" @back="isConnectingWallet = false">
      <WalletSelector />
    </ModalWrap>
    <div class="flex flex-col w-full">
      <RouterView />
    </div>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
import WalletSelector from "./components/WalletSelector.vue";
import { useGithubDiscussions } from "./composables/useGithubDiscussions";
import ModalWrap from "./components/ModalWrap.vue";

const isConnectingWallet = ref(false);

useGithubDiscussions().setup();
</script>

<template>
  <div>
    <header class="fixed w-full z-100">
      <MainNav @open="isConnectingWallet = true" />
    </header>
    <ModalWrap @back="isConnectingWallet = false" :visible="isConnectingWallet">
      <WalletSelector />
    </ModalWrap>
    <div class="pt-28 pl-4 pr-4">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@keyframes WorldEmoji {
  0% {
    content: "\01F30D";
  }

  33% {
    content: "\01F30E";
  }

  66% {
    content: "\01F30F";
  }
}

.world::before {
  content: "\01F30D";
}

.world::before {
  animation: WorldEmoji 2s linear infinite alternate;
}
</style>

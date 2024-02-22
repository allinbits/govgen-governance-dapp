<script setup lang="ts">
import { ref, onMounted } from "vue";
import { RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
import WalletSelector from "./components/WalletSelector.vue";
import { useGithubDiscussions } from "./composables/useGithubDiscussions";

const { goToPreviousPath } = useGithubDiscussions();
const isConnectingWallet = ref(false);

/**
 * When the user is redirected to the main site, we use a 'previous-link' to restore their session
 * and pass the token into the GitHub comment component which stores our session.
 */
function handleReroute() {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has("token")) {
    return;
  }

  goToPreviousPath(urlParams.get("token"));
}

onMounted(() => {
  handleReroute();
});
</script>

<template>
  <div>
    <header class="fixed w-full z-100">
      <MainNav @open="isConnectingWallet = true" />
    </header>
    <WalletSelector v-if="isConnectingWallet" @close="isConnectingWallet = false" />
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

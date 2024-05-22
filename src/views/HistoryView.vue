<script setup lang="ts">
import { useWallet } from "@/composables/useWallet";
import VoteHistory from "@/components/history/VoteHistory.vue";

const { loggedIn, address } = useWallet();
</script>
<template>
  <div class="flex flex-col items-start w-full pt-6 gap-8">
    <div class="flex gap-4">
      <div class="font-termina text-700 md:text-1000 font-semibold leading-[80px]">{{ $t("voteHistory.title") }}</div>
    </div>
    <VoteHistory v-if="loggedIn" :address="address" />
  </div>
</template>

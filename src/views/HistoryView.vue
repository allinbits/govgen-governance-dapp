<script setup lang="ts">
import { useWallet } from "@/composables/useWallet";
import VoteHistory from "@/components/history/VoteHistory.vue";

const { loggedIn, address } = useWallet();
</script>
<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-row py-8 md:py-[72px]">
      <div class="flex flex-col gap-8 w-full">
        <div class="flex gap-4">
          <div class="font-termina text-700 md:text-1000 font-semibold leading-[80px]">{{ $t("homepage.title") }}</div>
        </div>
      </div>
    </div>
    <div
      class="text-grey-100 text-400 lg:w-[656px] font-normal text-left text-pretty after:absolute after:block after:left-0 after:w-full after:bg-grey-300 after:h-px"
    ></div>

    <div class="flex flex-row py-8 md:py-[72px]">
      <VoteHistory v-if="loggedIn" :address="address" />
      <p v-else class="text-grey-100 text-400 lg:w-[656px] font-normal text-left text-pretty">
        <span class="block pb-8 lg:pb-[72px]"
          >Please connect your wallet or your wallet address to see your voting history</span
        >
      </p>
    </div>
  </div>
</template>

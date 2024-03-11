<script lang="ts" setup>
import { Wallets, useWallet } from "../../composables/useWallet";
import UiButton from "../ui/UiButton.vue";
import { ref } from "vue";
import { formatAmount, shorten } from "../../utility";

const isOpen = ref(false);
const isConnecting = ref(false);
const isSlowConnecting = ref(false);
const { connect, signOut, address, loggedIn } = useWallet();
const connectWallet = async (walletType: Wallets) => {
  let slow: ReturnType<typeof setTimeout> | null = null;
  try {
    isConnecting.value = true;
    slow = setTimeout(() => (isSlowConnecting.value = true), 10000);
    await connect(walletType);
    isConnecting.value = false;
    isSlowConnecting.value = false;
    isOpen.value = false;
    if (slow) {
      clearTimeout(slow);
    }
  } catch (e) {
    isConnecting.value = false;
    isSlowConnecting.value = false;
    if (slow) {
      clearTimeout(slow);
    }
  }
};
</script>

<template>
  <div>
    <template v-if="!loggedIn && !isOpen">
      <div
        class="justify-center px-6 py-4 rounded bg-grey-400 text-300 text-center cursor-pointer w-64"
        @click="isOpen = true"
      >
        Connect Wallet
      </div>
    </template>

    <template v-if="!loggedIn && isOpen">
      <div class="absolute right-0 top-4">
        <div class="flex flex-col gap-6 px-8 py-6 bg-grey-300 rounded w-80 relative">
          <Icon class="absolute top-3 right-4 cursor-pointer text-light" icon="close" @click="isOpen = false" />
          <div class="flex flex-col text-[white] text-500 font-semibold text-center">Connect your wallet</div>
          <div class="flex flex-col text-grey-100 text-300 font-medium text-center">
            You need to connect your wallet first to vote on proposals.
          </div>
          <div class="buttons">
            <UiButton class="my-4" @click="connectWallet(Wallets.keplr)">
              <template #icon>
                <Icon icon="keplr" size="1.4" class="mr-2" />
              </template>
              Keplr Wallet</UiButton
            >
            <UiButton class="my-4" @click="connectWallet(Wallets.leap)"
              ><Icon icon="leap" size="1.1" class="mr-2 bg-dark p-1 rounded-sm" />Leap Wallet</UiButton
            >
            <UiButton class="my-4" @click="connectWallet(Wallets.cosmostation)">
              <template #icon> <Icon icon="cosmostation" size="1.1" class="mr-2 bg-dark p-1 rounded-sm" /> </template
              >Cosmostation Wallet</UiButton
            >
          </div>
        </div>
      </div>
    </template>

    <template v-if="loggedIn && !isOpen">
      <div class="flex align-center items-stretch cursor-pointer" @click="isOpen = true">
        <div class="bg-gradient w-10 h-10 rounded-full mr-3"></div>
        <div class="flex flex-col justify-around">
          <div class="text-light text-200">{{ shorten(address) }}</div>
          <div class="text-100 text-grey-100">6,000,000 govgen</div>
        </div>
      </div>
    </template>

    <template v-if="loggedIn && isOpen">
      <div class="absolute right-0 top-4">
        <div class="flex flex-col px-8 py-4 pt-12 bg-grey-300 rounded w-80 relative">
          <Icon class="absolute top-3 right-4 cursor-pointer text-light" icon="close" @click="isOpen = false" />
          <div class="flex align-center items-stretch">
            <div class="bg-gradient w-10 h-10 rounded-full mr-3"></div>
            <div class="flex flex-col justify-around">
              <div class="text-light text-300">{{ shorten(address) }}</div>
            </div>
          </div>
          <div class="text-200 text-grey-100 pt-6 pb-2">Balance</div>
          <div class="text-300 text-light">{{ formatAmount("123456789", 6) }} govgen</div>
          <div class="buttons">
            <UiButton
              class="my-4 justify-center"
              @click="
                signOut();
                isOpen = false;
              "
            >
              Disconnect Wallet</UiButton
            >
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

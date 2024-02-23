<script lang="ts" setup>
import { Wallets, useWallet } from "../composables/useWallet";

const emits = defineEmits<{ (e: "close"): void }>();
const { connect, signOut, address, used, loggedIn } = useWallet();
</script>

<template>
  <div class="flex mt-24 justify-center fixed top-0 w-full">
    <div class="shadow-lg p-4 w-96 h-96 bg-white rounded-lg">
      <p>Wallet Selector...</p>
      <p>{{ loggedIn }}</p>
      <p>{{ address }}</p>
      <p>{{ used }}</p>
      <button @click="connect(Wallets.keplr)">Keplr</button>
      <button @click="connect(Wallets.leap)">Leap</button>
      <button @click="connect(Wallets.cosmostation)">cosmostation</button>
      <button @click="signOut()">SignOut</button>
      <button @click="emits('close')">Close</button>
    </div>
  </div>
</template>

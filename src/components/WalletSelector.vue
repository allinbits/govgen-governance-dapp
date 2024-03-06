<script lang="ts" setup>
import { Wallets, useWallet } from "../composables/useWallet";

const { connect, signOut, address, used, loggedIn } = useWallet();
</script>

<template>
  <div class="flex flex-col">
    <p>Wallet Selector...</p>
    <p>Logged In: {{ loggedIn }}</p>
    <p>{{ address }}</p>
    <p>{{ used }}</p>
    <button @click="connect(Wallets.keplr)">Keplr</button>
    <button @click="connect(Wallets.leap)">Leap</button>
    <button @click="connect(Wallets.cosmostation)">cosmostation</button>
    <button @click="signOut()">SignOut</button>
  </div>
</template>

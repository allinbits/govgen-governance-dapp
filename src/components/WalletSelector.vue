<script lang="ts" setup>
import { Wallets, useWallet } from "../composables/useWallet";
import AddressBalance from "./AddressBalance.vue";
import { useProposals } from "../composables/useProposals";

const emits = defineEmits<{ (e: "close"): void }>();
const { connect, signOut, address, loggedIn } = useWallet();
const { voteProposal, depositProposal } = useProposals();
</script>
<template>
  <div class="flex mt-24 justify-center fixed top-0 w-full">
    <div class="shadow-lg p-4 w-96 h-96 bg-white rounded-lg">
      <p>Wallet Selector...</p>
      <p>{{ loggedIn }}</p>
      <p>{{ address }}</p>
      <div v-if="loggedIn">
        <AddressBalance :address="address"> </AddressBalance>
      </div>
      <button @click="connect(Wallets.keplr)">Keplr</button>
      <button @click="connect(Wallets.leap)">Leap</button>
      <button @click="connect(Wallets.cosmostation)">cosmostation</button>
      <button @click="voteProposal({ proposalId: 1, option: 1 })">Vote proposal</button>
      <button @click="depositProposal({ proposalId: 1, amount: [{ amount: '450000000', denom: 'ugovgen' }] })">
        Deposit proposal
      </button>
      <button @click="signOut()">SignOut</button>
      <button @click="emits('close')">Close</button>
    </div>
  </div>
</template>

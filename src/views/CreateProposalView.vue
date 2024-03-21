<template>
  <div><button @click="test">Create</button></div>
</template>
<script setup lang="ts">
import { useProposals } from "@/composables/useProposals";

const { createProposal, createTextProposalContent } = useProposals();

const test = () => {
  const prop = createTextProposalContent({ title: "Test proposal", description: "test description" });
  createProposal({ initialDeposit: [{ amount: "5000000", denom: "ugovgen" }] }, prop);
};
</script>

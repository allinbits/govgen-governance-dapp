<template>
  <div>
    <ProposalDeposit :proposal-id="proposal?.proposal[0].id" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useChainData } from "@/composables/useChainData";

import ProposalDeposit from "@/components/popups/ProposalDeposit.vue";

const { getProposal } = useChainData();

const route = useRoute();
const proposal = getProposal(parseInt(route.params.id as string));
</script>

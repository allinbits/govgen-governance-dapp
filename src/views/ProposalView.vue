<script setup lang="ts">
import ProposalWrapper from "@/components/proposals/ProposalWrapper.vue";
import { useRoute } from "vue-router";
import { useChainData } from "@/composables/useChainData";
import { computed } from "vue";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/apolloClient";

const { getProposal, getBlockHeight } = useChainData();

const route = useRoute();
const proposal = getProposal(parseInt(route.params.id as string));

const height = computed(() => {
  if (
    proposal.value?.proposal[0].status == "PROPOSAL_STATUS_DEPOSIT_PERIOD" ||
    proposal.value?.proposal[0].status == "PROPOSAL_STATUS_VOTING_PERIOD"
  ) {
    return 0;
  }
  if (
    proposal.value?.proposal[0].status == "PROPOSAL_STATUS_PASSED" ||
    proposal.value?.proposal[0].status == "PROPSOAL_STATUS_REJECTED"
  ) {
    provideApolloClient(apolloClient);
    const height = getBlockHeight(proposal.value.proposal[0].voting_end_time);
    return parseInt(height.value?.block[0].height);
  }
  return 0;
});
</script>

<template>
  <ProposalWrapper v-if="proposal?.proposal[0].id" :proposal-id="proposal?.proposal[0].id" :height="height" />
</template>

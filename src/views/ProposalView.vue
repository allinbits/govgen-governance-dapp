<script setup lang="ts">
import ProposalWrapper from "@/components/proposals/ProposalWrapper.vue";
import { useRoute } from "vue-router";
import { useChainData } from "@/composables/useChainData";
import { ref, watch } from "vue";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/apolloClient";

const { getProposal, getBlockHeightAsync } = useChainData();

const route = useRoute();
const proposal = getProposal(parseInt(route.params.id as string));
const height = ref<number | null>(null);

watch(proposal, async (newProp, _oldProp) => {
  if (
    newProp?.proposal[0].status == "PROPOSAL_STATUS_DEPOSIT_PERIOD" ||
    newProp?.proposal[0].status == "PROPOSAL_STATUS_VOTING_PERIOD"
  ) {
    height.value = 0;
  } else {
    if (
      proposal.value?.proposal[0].status == "PROPOSAL_STATUS_PASSED" ||
      proposal.value?.proposal[0].status == "PROPSOAL_STATUS_REJECTED"
    ) {
      provideApolloClient(apolloClient);
      const hq = await getBlockHeightAsync(proposal.value.proposal[0].voting_end_time);
      console.log("here");
      if (hq) {
        height.value = hq.block[0].height;
      } else {
        height.value = 0;
      }
    } else {
      height.value = 0;
    }
  }
});
</script>

<template>
  <div>
    <ProposalWrapper
      v-if="proposal?.proposal[0].id && height !== null"
      :proposal-id="parseInt(route.params.id as string)"
      :height="height"
    />
    <div v-else class="text-400 text-grey-50 text-center mt-12 font-medium">
      {{ $t("proposalview.labels.unavailable") }}
    </div>
  </div>
</template>

<script setup lang="ts">
import ProposalCard from "@/components/home/ProposalCard.vue";
import CommentCount from "@/components/home/CommentCount.vue";
import ProposalStatus from "@/components/ui/ProposalStatus.vue";
import { PropStatus } from "@/types/proposals";
import apolloClient from "@/apolloClient";
import { bus } from "@/bus";
import { useChainData } from "@/composables/useChainData";
import { provideApolloClient } from "@vue/apollo-composable";
import { computed, ref, watch } from "vue";
import { decToPerc, totalAmounts } from "@/utility";
const props = defineProps<{
  address: string;
}>();
const { getVoteHistory, getProposals, getProposalsAsync } = useChainData();

const limit = ref(16);
const offset = ref(0);
const proposals = getProposals("active", limit.value, offset.value);

watch(offset, async (newOffset, oldOffset) => {
  if (newOffset != oldOffset) {
    provideApolloClient(apolloClient);
    try {
      const res = await getProposalsAsync("active", limit.value, newOffset);
      if (res) {
        proposals.value = res;
      }
    } catch (_e) {
      bus.emit("error");
    }
  }
});
const history = getVoteHistory(props.address);

const orderedProposals = computed(() => {
  return proposals.value?.all_proposals.map((x) => {
    if (history.value) {
      return { ...x, vote: history.value.proposal_vote.filter((y) => y.proposal_id == x.id) };
    } else {
      return { ...x, vote: [] };
    }
  });
});
</script>
<template>
  <div class="flex flex-col w-full pb-[72px]">
    <!-- Search Box, and Filters -->
    <div class="flex flex-col w-full justify-start items-center lg:flex-row gap-4 lg:gap-6 lg:justify-between">
      <div class="flex flex-col gap-10 w-full lg:flex-row lg:items-center">
        <div class="font-termina text-500 lg:text-600 xl:text-700">{{ $t("voteHistory.activeHeader") }}</div>
      </div>
    </div>
    <!-- Proposal View -->
    <div
      v-if="proposals"
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-[72px]"
    >
      <ProposalCard v-for="proposal in orderedProposals" :key="proposal.id" :link="'/proposals/' + proposal.id">
        <template #header
          ><ProposalStatus
            :status="PropStatus[(proposal.status ?? 'PROPOSAL_STATUS_UNSPECIFIED') as keyof typeof PropStatus]"
        /></template>
        <template #number>#{{ proposal.id }}</template>
        <div>{{ proposal.title }}</div>
        <div v-if="proposal.vote.length > 0" class="text-light text-200 mt-6">
          Voted: <span class="text-grey-100">{{ proposal.vote[0].height }}</span>
        </div>
        <div v-if="proposal.vote.length > 0" class="flex flex-row gap-3">
          <div
            v-for="vote in proposal.vote"
            :key="vote.option + vote.proposal_id"
            class="rounded-md text-grey-100 text-100 p-2 px-4 mt-4 font-normal"
            :class="{
              'bg-accent-100 text-grey-200': vote.option == 'VOTE_OPTION_YES',
              'bg-accent-200 text-grey-200': vote.option == 'VOTE_OPTION_NO_WITH_VETO',
              'bg-neg-200 text-grey-200': vote.option == 'VOTE_OPTION_NO',
              'bg-grey-100 text-light': vote.option == 'VOTE_OPTION_ABSTAIN',
            }"
          >
            Voted {{ $t("voteOptions." + vote.option) }}
            <template v-if="Number(vote.weight) != 1">: {{ decToPerc(vote.weight, 0) }}%</template>
          </div>
        </div>
        <div
          v-if="proposal.proposal_deposits.filter((x) => x.depositor_address == props.address).length > 0"
          class="flex"
        >
          <div
            class="rounded-md text-light text-100 p-2 px-4 mt-2 font-normal bg-grey-200 flex flex-row justify-center items-end"
          >
            Deposited
            <Icon
              icon="info"
              class="aspect-square ml-2"
              :title="
                totalAmounts(
                  proposal.proposal_deposits
                    .filter((x) => x.depositor_address == address)
                    .map((x) => x.amount)
                    .flat(),
                )
              "
            />
          </div>
        </div>
        <template #footer>
          <div class="flex flex-row text-200 text-grey-100 font-medium items-center justify-between w-full">
            <span></span>
            <div class="flex flex-row gap-4">
              <!-- Vote Count-->
              <div class="flex flex-row items-center gap-1">
                <Icon icon="voters" />
                <span>{{ proposal.proposal_votes_aggregate.aggregate?.count ?? 0 }}</span>
              </div>
              <!-- Comment Count -->
              <div class="flex flex-row items-center gap-1">
                <Icon icon="comments" />
                <CommentCount :proposal="proposal.id" />
              </div>
            </div>
          </div>
        </template>
      </ProposalCard>
    </div>
  </div>
</template>

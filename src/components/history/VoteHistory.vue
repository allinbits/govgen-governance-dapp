<script setup lang="ts">
import apolloClient from "@/apolloClient";
import { bus } from "@/bus";
import { useChainData } from "@/composables/useChainData";
import { provideApolloClient } from "@vue/apollo-composable";
import { computed, ref, watch } from "vue";
import ProposalList from "./ProposalList.vue";
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

const activeProposals = computed(() => {
  return proposals.value?.all_proposals
    .filter((x) => x.status == "PROPOSAL_STATUS_VOTING_PERIOD" || x.status == "PROPOSAL_STATUS_DEPOSIT_PERIOD")
    .map((x) => {
      if (history.value) {
        return { ...x, vote: history.value.proposal_vote.filter((y) => y.proposal_id == x.id) };
      } else {
        return { ...x, vote: [] };
      }
    });
});
const pastProposals = computed(() => {
  return proposals.value?.all_proposals
    .filter((x) => x.status != "PROPOSAL_STATUS_VOTING_PERIOD" && x.status != "PROPOSAL_STATUS_DEPOSIT_PERIOD")
    .map((x) => {
      if (history.value) {
        return { ...x, vote: history.value.proposal_vote.filter((y) => y.proposal_id == x.id) };
      } else {
        return { ...x, vote: [] };
      }
    });
});
const hasMore = computed(() => {
  return (proposals.value?.proposal_aggregate.aggregate?.count ?? 0) > offset.value + limit.value;
});
function next() {
  offset.value += limit.value;
}

function prev() {
  offset.value = offset.value <= limit.value ? 0 : offset.value - limit.value;
}
</script>
<template>
  <div class="flex flex-col w-full">
    <ProposalList
      v-if="activeProposals && activeProposals.length > 0"
      :address="address"
      :proposals="activeProposals"
      :title="$t('voteHistory.activeHeader')"
      class="pb-[72px]"
    />
    <ProposalList
      v-if="pastProposals && pastProposals.length > 0"
      :address="address"
      :proposals="pastProposals"
      :title="$t('voteHistory.pastHeader')"
    />

    <div v-if="proposals" class="flex flex-row justify-end pt-12 gap-4">
      <Icon
        icon="Arrowleftend"
        class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': offset > 0 }"
        @click="
          () => {
            offset = 0;
          }
        "
      />
      <Icon
        icon="Arrowleft"
        class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': offset > 0 }"
        @click="
          () => {
            if (offset > 0) {
              prev();
            }
          }
        "
      />
      <!-- Page Numbers -->
      <Icon
        icon="Arrowright"
        class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': hasMore }"
        @click="
          () => {
            if (hasMore) {
              next();
            }
          }
        "
      />
      <Icon
        icon="Arrowrightend"
        class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': hasMore }"
        @click="
          () => {
            if (hasMore) {
              offset = Math.floor((proposals?.proposal_aggregate.aggregate?.count ?? 0) / limit) * limit;
            }
          }
        "
      />
    </div>
  </div>
</template>

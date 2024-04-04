<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useChainData } from "@/composables/useChainData";
import * as Utility from "@/utility/index";
import { AllVotesQuery } from "@/gql/graphql";

const { getAllVotes, getAllVotesAsync } = useChainData();

const props = defineProps<{ proposalId: number }>();
const offset = ref<number>(0);
const limit = ref<number>(10);

const votes = getAllVotes(props.proposalId, limit.value, offset.value);
const hasMore = computed(() => {
  return (votes.value?.proposal_vote_aggregate.aggregate?.count ?? 0) > offset.value + limit.value;
});
function next() {
  offset.value += limit.value;
}

function prev() {
  offset.value = offset.value <= limit.value ? 0 : offset.value - limit.value;
}

watch(offset, async (newOffset, oldOffset) => {
  if (newOffset != oldOffset) {
    if (votes.value) {
      const fetchedVotes = await getAllVotesAsync(props.proposalId, limit.value, newOffset);
      if (fetchedVotes) {
        votes.value = fetchedVotes;
      }
    }
  }
});

const filteredVotes = computed(() => {
  return votes.value?.proposal_vote;
});

const getTxHash = (vote: AllVotesQuery["proposal_vote"][0]) => {
  if (vote.block && vote.block.transactions && vote.block.transactions.length > 0) {
    const transaction = vote.block.transactions.filter((tx) => {
      return (
        tx.messages.filter((msg: { [x: string]: string | number }) => {
          return (
            msg["voter"] == vote.voter_address &&
            msg["proposal_id"] == vote.proposal_id &&
            (msg["@type"] == "/govgen.gov.v1beta1.MsgVoteWeighted" || msg["@type"] == "/govgen.gov.v1beta1.MsgVote")
          );
        }).length > 0
      );
    })[0];
    if (transaction) {
      return Utility.shorten(transaction.hash);
    } else {
      return "-";
    }
  } else {
    return "-";
  }
};
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="grid grid-cols-5 py-4 w-full text-grey-100 font-medium text-200">
      <span>{{ $t("components.Breakdown.voter") }}</span>
      <span>{{ $t("components.Breakdown.txHash") }}</span>
      <span>{{ $t("components.Breakdown.answer") }}</span>
      <span>{{ $t("components.Breakdown.weight") }}</span>
      <span class="text-right">{{ $t("components.Breakdown.time") }}</span>
    </div>
    <div
      v-for="vote in filteredVotes"
      :key="vote.voter_address + vote.option"
      class="grid grid-cols-5 py-4 w-full text-200 text-grey-50"
    >
      <span>{{ Utility.shorten(vote.voter_address) }}</span>
      <span>{{ getTxHash(vote) }}</span>
      <span>{{ vote.option.replace("VOTE_OPTION_", "") }}</span>
      <span>{{ Utility.decToPerc(vote.weight, 0) }}%</span>
      <span class="text-right">{{ Utility.formatHuman(new Date(vote.timestamp)) }}</span>
    </div>

    <div class="flex flex-row justify-end pt-12 gap-4">
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
            next();
          }
        "
      />
      <Icon
        icon="Arrowrightend"
        class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': hasMore }"
        @click="
          () => {
            offset = Math.floor((votes?.proposal_vote_aggregate.aggregate?.count ?? 0) / limit) * limit;
          }
        "
      />
    </div>
  </div>
</template>

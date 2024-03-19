<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import VoteChart from "@/components/proposals/VoteChart.vue";
import CommonButton from "@/components/ui/CommonButton.vue";

type VoteType = "VOTE_OPTION_YES" | "VOTE_OPTION_NO" | "VOTE_OPTION_ABSTAIN" | "VOTE_OPTION_VETO";

type Props = {
  title: string;
  max?: number;
  voters: Array<{
    __typename?: "proposal_vote" | undefined;
    voter_address: string;
    option: VoteType | string;
  }>;
  tallies: {
    yes: string;
    no: string;
    abstain: string;
    veto: string;
  };
  pcts: {
    yes: string;
    no: string;
    abstain: string;
    veto: string;
  };
};

const props = defineProps<Props>();
const emits = defineEmits<{ (e: "onBreakdown"): void }>();
const votes = reactive<{ yes: number; no: number; abstain: number; veto: number; total: number }>({
  yes: 0,
  no: 0,
  abstain: 0,
  veto: 0,
  total: 0,
});

function calculateVotes() {
  votes.yes = props.voters.filter((x) => x.option === "VOTE_OPTION_YES").length;
  votes.no = props.voters.filter((x) => x.option === "VOTE_OPTION_NO").length;
  votes.abstain = props.voters.filter((x) => x.option === "VOTE_OPTION_ABSTAIN").length;
  votes.veto = props.voters.filter((x) => x.option === "VOTE_OPTION_VETO").length;
  votes.total = props.voters.length;
}

const totalVoteText = computed(() => {
  if (typeof props.max === "number") {
    return `${votes.total} / ${props.max} voted`;
  }

  return `${votes.total} accounts voted`;
});

onMounted(() => {
  calculateVotes();
});
</script>

<template>
  <div class="flex flex-col gap-12 rounded-md bg-grey-400 p-10 pb-14 w-full">
    <!-- Upper Section -->
    <div class="flex flex-row">
      <div class="flex flex-col flex-grow">
        <span class="text-500 text-light">{{ props.title }}</span>
        <span class="text-300 text-grey-100">{{ totalVoteText }}</span>
      </div>
      <CommonButton class="!bg-grey-200" @click="emits('onBreakdown')">Breakdown</CommonButton>
    </div>
    <!-- Lower Section -->
    <div class="flex flex-row gap-12 w-full items-center">
      <div class="flex items-center w-28 h-28 pb-1">
        <VoteChart :yes="votes.yes" :no="votes.no" :abstain="votes.abstain" :veto="votes.veto" />
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-accent-100 text-300 start-6">Yes: {{ votes.yes }}</span>
          <span class="text-grey-100 text-100">{{ props.tallies.yes }} TOKEN | {{ props.pcts.yes }}%</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-accent-200 text-300 start-6">Veto: {{ votes.veto }}</span>
          <span class="text-grey-100 text-100">{{ props.tallies.veto }} TOKEN | {{ props.pcts.veto }}%</span>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-neg-200 text-300 start-6">No: {{ votes.no }}</span>
          <span class="text-grey-100 text-100">{{ props.tallies.no }} TOKEN | {{ props.pcts.no }}%</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-grey-100 text-300 start-6">Abstain: {{ votes.abstain }}</span>
          <span class="text-grey-100 text-100">{{ props.tallies.abstain }} TOKEN | {{ props.pcts.abstain }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

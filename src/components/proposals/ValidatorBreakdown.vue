<script lang="ts" setup>
import { ValSetQuery, ValidatorsQuery, VotesQuery } from "@/gql/graphql";
import * as Utility from "@/utility/index";
import { computed } from "vue";

const props = defineProps<{
  validatorData: Array<
    (ValidatorsQuery["validator_status"][0] | ValSetQuery["proposal_validator_status_snapshot"][0]) & {
      voting_power: number;
      votes: VotesQuery["proposal_vote"];
    }
  >;
}>();

const getTxHash = (vote: VotesQuery["proposal_vote"][0]) => {
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
const filteredVotes = computed(() => {
  return props.validatorData.map((x) => x.votes).flat();
});
const getValidatorInfo = (address: string) => {
  return props.validatorData.filter((x) => x.validator.validator_info?.self_delegate_address == address)[0].validator
    .validator_descriptions[0];
};
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="grid grid-cols-5 py-4 w-full text-grey-100 font-medium text-200">
      <span>Moniker</span>
      <span>TX Hash</span>
      <span>Answer</span>
      <span>Weight</span>
      <span class="text-right">Time</span>
    </div>
    <div
      v-for="vote in filteredVotes"
      :key="vote.voter_address + vote.option"
      class="grid grid-cols-5 py-4 w-full text-200 text-grey-50"
    >
      <span>{{ getValidatorInfo(vote.voter_address).moniker }}</span>
      <span>{{ getTxHash(vote) }}</span>
      <span>{{ vote.option.replace("VOTE_OPTION_", "") }}</span>
      <span>{{ Utility.decToPerc(vote.weight, 0) }}%</span>
      <span class="text-right">{{ Utility.formatHuman(new Date(vote.timestamp)) }}</span>
    </div>
  </div>
</template>

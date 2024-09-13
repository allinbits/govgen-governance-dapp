<script lang="ts" setup>
import { ValSetQuery, ValidatorsQuery, VotesQuery } from "@/gql/graphql";
import * as Utility from "@/utility/index";

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
            msg["proposalId"] == vote.proposal_id &&
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
const getValidatorInfo = (address: string) => {
  return props.validatorData.filter((x) => x.validator_info?.self_delegate_address == address)[0].validator_info
    .validator_descriptions[0];
};
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="grid grid-cols-5 py-4 w-full text-grey-100 font-medium text-200">
      <span>{{ $t("components.Breakdown.moniker") }}</span>
      <span>{{ $t("components.Breakdown.txHash") }}</span>
      <span>{{ $t("components.Breakdown.answer") }}</span>
      <span>{{ $t("components.Breakdown.weight") }}</span>
      <span class="text-right">{{ $t("components.Breakdown.time") }}</span>
    </div>
    <template v-for="validator in validatorData">
      <template v-if="validator.votes.length > 0">
        <div
          v-for="vote in validator.votes"
          :key="vote.voter_address + vote.option"
          class="grid grid-cols-5 py-4 w-full text-200 text-grey-50"
        >
          <span>{{ getValidatorInfo(vote.voter_address).moniker }}</span>
          <span>{{ getTxHash(vote) }}</span>
          <span>{{ vote.option.replace("VOTE_OPTION_", "") }}</span>
          <span>{{ Utility.decToPerc(vote.weight, 0) }}%</span>
          <span class="text-right">{{ Utility.formatHuman(new Date(vote.timestamp)) }}</span>
        </div>
      </template>
      <template v-else>
        <div :key="validator.validator_address" class="grid grid-cols-5 py-4 w-full text-200 text-grey-50">
          <span>{{ getValidatorInfo(validator.validator_info?.self_delegate_address ?? "").moniker }}</span>
          <span> - </span>
          <span>{{ $t("components.Breakdown.hasNotVoted") }}</span>
          <span>-</span>
          <span class="text-right">-</span>
        </div>
      </template>
    </template>
  </div>
</template>

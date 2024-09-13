<script lang="ts" setup>
import { computed } from "vue";
import VoteChart from "@/components/proposals/VoteChart.vue";
import CommonButton from "@/components/ui/CommonButton.vue";
import { decToPerc, formatAmount } from "@/utility";

type Props = {
  max?: number;
  voters: number;
  denom: string;
  precision: number;
  voteTallies: {
    yes: number;
    no: number;
    abstain: number;
    veto: number;
  };
  tokenTallies: {
    yes: number;
    no: number;
    abstain: number;
    veto: number;
  };
};

const props = defineProps<Props>();
const emits = defineEmits<{ (e: "onBreakdown"): void }>();
const pcts = computed(() => {
  const sum = props.tokenTallies.yes + props.tokenTallies.no + props.tokenTallies.veto + props.tokenTallies.abstain;
  return {
    yes: sum > 0 ? props.tokenTallies.yes / sum : 0,
    no: sum > 0 ? props.tokenTallies.no / sum : 0,
    veto: sum > 0 ? props.tokenTallies.veto / sum : 0,
    abstain: sum > 0 ? props.tokenTallies.abstain / sum : 0,
  };
});
const totalVoteText = computed(() => {
  if (typeof props.max === "number") {
    return `${props.voters} / ${props.max}`;
  }

  return `${props.voters}`;
});
</script>

<template>
  <div class="flex flex-col gap-12 rounded-md bg-grey-400 p-10 pb-14 w-full">
    <!-- Upper Section -->
    <div class="flex flex-row items-center">
      <div class="flex flex-col flex-grow">
        <span class="text-300 md:text-500 text-light mb-1"><slot name="header"></slot></span>
        <span class="text-200 md:text-300 text-grey-100">{{ totalVoteText }} <slot name="type"></slot></span>
      </div>
      <CommonButton class="!bg-grey-200 hidden md:flex" @click="emits('onBreakdown')">{{
        $t("components.VotePanel.breakdown")
      }}</CommonButton>
    </div>
    <!-- Lower Section -->
    <div v-if="voters >= 1" class="flex flex-col sm:flex-row gap-6 md:gap-12 w-full sm:items-center">
      <div class="flex items-center w-28 h-28 pb-1 mr-6">
        <VoteChart
          :yes="voteTallies.yes"
          :no="voteTallies.no"
          :abstain="voteTallies.abstain"
          :veto="voteTallies.veto"
        />
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-accent-100 text-300 start-6">{{ $t("voteOptions.yes") }}: {{ voteTallies.yes }}</span>
          <span class="text-grey-100 text-100"
            ><span class="sm:block md:inline-block">{{ formatAmount(tokenTallies.yes, precision) }} {{ denom }} </span>
            <span class="sm:hidden md:inline-block">&nbsp;|&nbsp;</span
            ><span> {{ decToPerc(pcts.yes, 2) }}%</span></span
          >
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-accent-200 text-300 start-6">{{ $t("voteOptions.nwvShort") }}: {{ voteTallies.veto }}</span>
          <span class="text-grey-100 text-100"
            ><span class="sm:block md:inline-block">{{ formatAmount(tokenTallies.veto, precision) }} {{ denom }}</span>
            <span class="sm:hidden md:inline-block">&nbsp;|&nbsp;</span
            ><span> {{ decToPerc(pcts.veto, 2) }}%</span></span
          >
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-neg-200 text-300 start-6">{{ $t("voteOptions.no") }}: {{ voteTallies.no }}</span>
          <span class="text-grey-100 text-100"
            ><span class="sm:block md:inline-block">{{ formatAmount(tokenTallies.no, precision) }} {{ denom }}</span>
            <span class="sm:hidden md:inline-block">&nbsp;|&nbsp;</span><span> {{ decToPerc(pcts.no, 2) }}%</span></span
          >
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-grey-100 text-300 start-6">{{ $t("voteOptions.abstain") }}: {{ voteTallies.abstain }}</span>
          <span class="text-grey-100 text-100"
            ><span class="sm:block md:inline-block"
              >{{ formatAmount(tokenTallies.abstain, precision) }} {{ denom }}</span
            >
            <span class="sm:hidden md:inline-block">&nbsp;|&nbsp;</span
            ><span> {{ decToPerc(pcts.abstain, 2) }}%</span></span
          >
        </div>
      </div>
    </div>
    <div v-else>
      <span class="text-grey-100 text-300">{{ $t("components.VotePanel.noVotes") }}</span>
    </div>
  </div>
</template>

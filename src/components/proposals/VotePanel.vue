<script lang="ts" setup>
import { computed, reactive } from "vue";
import VoteChart from "@/components/proposals/VoteChart.vue";
import CommonButton from "@/components/ui/CommonButton.vue";

type Props = {
  max?: number;
  voters: number;
  tallies: {
    yes: number;
    no: number;
    abstain: number;
    veto: number;
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
    <div class="flex flex-row">
      <div class="flex flex-col flex-grow">
        <span class="text-500 text-light"><slot name="header"></slot></span>
        <span class="text-300 text-grey-100">{{ totalVoteText }} <slot name="type"></slot></span>
      </div>
      <CommonButton class="!bg-grey-200" @click="emits('onBreakdown')">Breakdown</CommonButton>
    </div>
    <!-- Lower Section -->
    <div v-if="voters >= 1" class="flex flex-row gap-12 w-full items-center">
      <div class="flex items-center w-28 h-28 pb-1">
        <VoteChart
          :yes="props.tallies.yes"
          :no="props.tallies.no"
          :abstain="props.tallies.abstain"
          :veto="props.tallies.veto"
        />
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
    <div>
      <span class="text-grey-100 text-300">No votes have been counted</span>
    </div>
  </div>
</template>

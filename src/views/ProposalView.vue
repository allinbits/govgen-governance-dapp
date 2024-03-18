<script setup lang="ts">
import { useRoute } from "vue-router";
import { useChainData } from "@/composables/useChainData";
import GithubComments from "../components/proposals/GithubComments.vue";
import GithubLinks from "../components/proposals/GithubLinks.vue";

import ProposalVote from "../components/popups/ProposalVote.vue";

import SimpleBadge from "@/components/ui/SimpleBadge.vue";
import SimpleCard from "@/components/ui/SimpleCard.vue";
import { ContextTypes } from "@/types/ui";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { computed } from "vue";
import { decToPerc, formatAmount } from "@/utility";

dayjs.extend(duration);
const { getProposal, getParams, getProposalTallies, getStakingStatus } = useChainData();

const route = useRoute();
const proposalTerm = `Proposal #${route.params.id}`;
const linksTerm = `Links #${route.params.id}`;
const proposal = getProposal(parseInt(route.params.id as string));
const proposalTallies = getProposalTallies(parseInt(route.params.id as string));
const params = getParams();
const staking = getStakingStatus();

const inDeposit = computed(() => {
  return proposal.value?.proposal[0].status === "PROPOSAL_STATUS_DEPOSIT_PERIOD";
});
const inVoting = computed(() => {
  return proposal.value?.proposal[0].status === "PROPOSAL_STATUS_VOTING_PERIOD";
});
const failed = computed(() => {
  return proposal.value?.proposal[0].status === "PROPOSAL_STATUS_FAILED";
});
const rejected = computed(() => {
  return proposal.value?.proposal[0].status === "PROPOSAL_STATUS_REJECTED";
});
const passed = computed(() => {
  return proposal.value?.proposal[0].status === "PROPOSAL_STATUS_PASSED";
});
const tally_params = computed(() => {
  try {
    return params.value?.gov_params[0].tally_params;
  } catch (e) {
    return {};
  }
});

const quorum = computed(() => {
  return parseFloat(tally_params.value?.quorum ?? "0");
});

const threshold = computed(() => {
  return parseFloat(tally_params.value?.threshold ?? "0");
});

const veto_threshold = computed(() => {
  return parseFloat(tally_params.value?.veto_threshold ?? "0");
});

const yesVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0].yes ?? "0");
});
const noVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0].no ?? "0");
});
const nwvVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0].no_with_veto ?? "0");
});
const abstainVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0].abstain ?? "0");
});

const yes = computed(() => {
  return yesVotes.value / parseFloat(staking.value?.staking_pool[0].bonded_tokens ?? "0");
});
const no = computed(() => {
  return noVotes.value / parseFloat(staking.value?.staking_pool[0].bonded_tokens ?? "0");
});
const abstain = computed(() => {
  return abstainVotes.value / parseFloat(staking.value?.staking_pool[0].bonded_tokens ?? "0");
});
const nwv = computed(() => {
  return nwvVotes.value / parseFloat(staking.value?.staking_pool[0].bonded_tokens ?? "0");
});

const turnout = computed(() => {
  return nwv.value + no.value + yes.value + abstain.value;
});
const expectedResult = computed(() => {
  if (turnout.value < quorum.value) {
    return false;
  } else {
    if (nwv.value > veto_threshold.value) {
      return false;
    } else {
      if (yes.value > threshold.value) {
        return true;
      } else {
        return false;
      }
    }
  }
});
/*
const voting_params = computed(() => {
  try {
    return JSON.parse(params.value?.gov_params[0].voting_params);
  } catch (e) {
    return {};
  }
});
const deposit_params = computed(() => {
  try {
    return JSON.parse(params.value?.gov_params[0].deposit_params);
  } catch (e) {
    return {};
  }
});
*/
const timeTo = (dateString: string) => {
  const now = dayjs();
  const to = dayjs(dateString);
  const diff = dayjs.duration(to.diff(now));
  return diff.format("D [d] : H [hr] : m [m] [left]");
};
</script>

<template>
  <div>
    <div class="badges my-12">
      <template v-if="inVoting">
        <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3">Voting Period </SimpleBadge>
        <SimpleBadge v-if="turnout < quorum" :type="ContextTypes.PLAIN" icon="warning">Quorum not reached</SimpleBadge>
      </template>
      <template v-if="inDeposit">
        <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3">Deposit Period </SimpleBadge>
        <SimpleBadge :type="ContextTypes.PLAIN" icon="warning">Deposit not reached</SimpleBadge>
      </template>
      <SimpleBadge v-if="failed" :type="ContextTypes.FAIL" class="mr-3">Deposit Not Met </SimpleBadge>
      <SimpleBadge v-if="rejected" icon="close" :type="ContextTypes.FAIL" class="mr-3">Rejected </SimpleBadge>
      <SimpleBadge v-if="passed" :type="ContextTypes.SUCCESS" class="mr-3">Passed</SimpleBadge>
    </div>
    <div class="flex mb-12">
      <div class="basic-details flex-grow">
        <h1 class="font-termina text-800 text-light mb-16 pb-2">
          #{{ proposal?.proposal[0].id }}: {{ proposal?.proposal[0].title }}
        </h1>
        <div class="basic-stats flex">
          <div class="quorum mr-16">
            <div class="text-100 text-grey-100 mb-4">Turn out | Quorum</div>
            <div class="text-500 text-light">{{ decToPerc(turnout, 1) }}% | {{ decToPerc(quorum, 1) }}%</div>
          </div>
          <div class="result">
            <template v-if="inDeposit">
              <div class="text-100 text-grey-100 mb-4">Expected proposal result</div>
              <div class="text-500 text-neg-200">Will Fail</div>
            </template>
            <template v-if="inVoting">
              <div class="text-100 text-grey-100 mb-4">Expected proposal result</div>
              <div v-if="expectedResult" class="text-500 text-accent-100">Will Pass</div>
              <div v-else class="text-500 text-neg-200">Will Be Rejected</div>
            </template>
            <template v-if="passed">
              <div class="text-100 text-grey-100 mb-4">Proposal result</div>
              <div class="text-500 text-accent-100">Passed</div>
            </template>
            <template v-if="rejected">
              <div class="text-100 text-grey-100 mb-4">Proposal result</div>
              <div class="text-500 text-neg-200">Rejected</div>
            </template>
            <template v-if="failed">
              <div class="text-100 text-grey-100 mb-4">Proposal result</div>
              <div class="text-500 text-neg-200">Failed</div>
            </template>
          </div>
        </div>
      </div>
      <div class="cta w-96">
        <SimpleCard v-if="inVoting" class="p-10">
          <div class="text-center text-light text-500">{{ timeTo(proposal?.proposal[0].voting_end_time) }}</div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="bg-gradient rounded h-2 w-2/12" />
          </div>
          <ProposalVote :proposal-id="proposal?.proposal[0].id" class="w-full" />
        </SimpleCard>
        <SimpleCard v-if="inDeposit" class="p-10">
          <div class="text-center text-light text-500">{{ timeTo(proposal?.proposal[0].deposit_end_time) }}</div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="bg-gradient rounded h-2 w-2/12" />
          </div>
          <!-- Replace with button from other PR -->
          <div class="button w-full bg-gradient rounded text-dark text-300 text-center px-6 py-4">Deposit</div>
        </SimpleCard>
      </div>
    </div>
    <SimpleCard v-if="!inDeposit" class="items-stretch my-6">
      <div class="flex">
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-accent-100 mb-1">Yes: {{ decToPerc(yes, 2) }}%</div>
          <div class="text-100 text-grey-100">{{ formatAmount(yesVotes, 6) }} TOKEN</div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-neg-200 mb-1">No: {{ decToPerc(no, 2) }}%</div>
          <div class="text-100 text-grey-100">{{ formatAmount(noVotes, 6) }} TOKEN</div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-accent-200 mb-1">Veto: {{ decToPerc(nwv, 2) }}%</div>
          <div class="text-100 text-grey-100">{{ formatAmount(nwvVotes, 6) }} TOKEN</div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-grey-100 mb-1">Abstain: {{ decToPerc(abstain, 2) }}%</div>
          <div class="text-100 text-grey-100">{{ formatAmount(abstainVotes, 6) }} TOKEN</div>
        </div>
      </div>
    </SimpleCard>
    <div class="mb-2 font-medium text-3xl">Proposal {{ route.params.id }}</div>
    <GithubLinks :term="linksTerm" />
    <GithubComments :term="proposalTerm" />
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useChainData } from "@/composables/useChainData";

import GithubComments from "@/components/proposals/GithubComments.vue";
import GithubLinks from "@/components/proposals/GithubLinks.vue";
import ProposalVote from "@/components/popups/ProposalVote.vue";
import ProposalDeposit from "@/components/popups/ProposalDeposit.vue";
import SimpleBadge from "@/components/ui/SimpleBadge.vue";
import SimpleCard from "@/components/ui/SimpleCard.vue";
import UiTabs from "@/components/ui/UiTabs.vue";
import VotePanel from "@/components/proposals/VotePanel.vue";

import { Deposit } from "@atomone/govgen-types/govgen/gov/v1beta1/gov";
import { ContextTypes } from "@/types/ui";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { decToPerc, formatAmount } from "@/utility";

type TabNames = "Info" | "Voters" | "Discussions" | "Links";

dayjs.extend(duration);
const { getProposal, getParams, getProposalTallies, getStakingStatus } = useChainData();

const route = useRoute();
const proposal = getProposal(parseInt(route.params.id as string));
const proposalTallies = getProposalTallies(parseInt(route.params.id as string));
const params = getParams();
const staking = getStakingStatus();

const termLink = computed(() => `Link #${route.params.id}`);
const termDiscussion = computed(() => `Proposal #${route.params.id}`);

const tabSelected = ref<TabNames>("Info");
const tabOptions = reactive<TabNames[]>(["Info", "Voters", "Discussions", "Links"]);

const inDeposit = computed(() => proposal.value?.proposal[0].status === "PROPOSAL_STATUS_DEPOSIT_PERIOD");
const inVoting = computed(() => proposal.value?.proposal[0].status === "PROPOSAL_STATUS_VOTING_PERIOD");
const failed = computed(() => proposal.value?.proposal[0].status === "PROPOSAL_STATUS_FAILED");
const rejected = computed(() => proposal.value?.proposal[0].status === "PROPOSAL_STATUS_REJECTED");
const passed = computed(() => proposal.value?.proposal[0].status === "PROPOSAL_STATUS_PASSED");

const depositReducer = (sum: number, deposit: Partial<{ amount: Deposit["amount"] | null }>) => {
  return sum + (deposit.amount?.reduce((sum: number, amount) => sum + parseInt(amount?.amount ?? ""), 0) ?? 0);
};

const initialDeposit = computed(() => {
  return proposal.value?.proposal[0].proposal_deposits
    .filter((x) => x.depositor_address == proposal.value?.proposal[0].proposer_address)
    .reduce(depositReducer, 0);
});

const totalDeposit = computed(() => {
  return proposal.value?.proposal[0].proposal_deposits.reduce(depositReducer, 0) ?? 0;
});
const minDeposit = computed(() => {
  return params.value?.gov_params[0].deposit_params.min_deposit[0].amount;
});
const depositDenom = computed(() => {
  return params.value?.gov_params[0].deposit_params.min_deposit[0].denom;
});

const tally_params = computed(() => {
  try {
    return params.value?.gov_params[0].tally_params;
  } catch (e) {
    return {};
  }
});

const shouldTrim = computed(() => {
  return (proposal.value?.proposal[0].description?.length ?? 0) > 650;
});

const showAll = ref(false);
const description = computed(() => {
  if (shouldTrim.value && !showAll.value) {
    return proposal.value?.proposal[0].description.slice(0, 650);
  } else {
    return proposal.value?.proposal[0].description;
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
  return parseFloat(proposalTallies.value?.proposal_tally_result[0]?.yes ?? "0");
});

const noVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0]?.no ?? "0");
});

const nwvVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0]?.no_with_veto ?? "0");
});

const abstainVotes = computed(() => {
  return parseFloat(proposalTallies.value?.proposal_tally_result[0]?.abstain ?? "0");
});

const yes = computed(() => {
  return yesVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const no = computed(() => {
  return noVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const abstain = computed(() => {
  return abstainVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const nwv = computed(() => {
  return nwvVotes.value / parseFloat(staking.value?.staking_pool[0]?.bonded_tokens ?? "0");
});

const turnout = computed(() => {
  return nwv.value + no.value + yes.value + abstain.value;
});

const tokenTallies = computed(() => {
  return {
    yes: formatAmount(yesVotes.value, 6),
    no: formatAmount(noVotes.value, 6),
    veto: formatAmount(nwvVotes.value, 6),
    abstain: formatAmount(abstainVotes.value, 6),
  };
});

const pctTallies = computed(() => {
  return {
    yes: decToPerc(yes.value, 2),
    no: decToPerc(no.value, 2),
    veto: decToPerc(nwv.value, 2),
    abstain: decToPerc(abstain.value, 2),
  };
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

function isTabSelected(tabName: TabNames) {
  return tabSelected.value.toLowerCase() == tabName.toLowerCase();
}
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
          <ProposalDeposit
            :proposal-id="proposal?.proposal[0].id"
            :min-deposit="minDeposit"
            :total-deposit="totalDeposit"
            :deposit-denom="depositDenom"
          />
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
    <UiTabs id="proposal-tab" v-model="tabSelected" :options="tabOptions" />
    <div class="flex flex-col pt-[72px]">
      <div v-if="isTabSelected('Info')" class="w-full">
        <div class="flex flex-col gap-6">
          <div class="flex gap-6">
            <SimpleCard class="w-1/2 flex-grow p-10">
              <div class="text-light text-500 text-left mb-8">Proposal Description</div>
              <div class="text-grey-100">
                {{ description }}...
                <template v-if="shouldTrim">
                  <span v-if="!showAll" class="text-light cursor-pointer" @click="showAll = true">read more</span>
                  <span v-if="showAll" class="text-light cursor-pointer" @click="showAll = false">read less</span>
                </template>
              </div>
            </SimpleCard>
            <SimpleCard class="w-1/2 flex-grow p-10">
              <div class="flex w-full flex-wrap">
                <div class="w-full flex-2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Proposer</div>
                  <div class="text-light text-300">{{ proposal?.proposal[0].proposer_address }}</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Voting start</div>
                  <div class="text-light text-300">
                    {{ inDeposit ? "-" : dayjs(proposal?.proposal[0].voting_start_time).format("MMMM D, YYYY h:mm A") }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Voting end</div>
                  <div class="text-light text-300">
                    {{ inDeposit ? "-" : dayjs(proposal?.proposal[0].voting_end_time).format("MMMM D, YYYY h:mm A") }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Submit time</div>
                  <div class="text-light text-300">
                    {{ dayjs(proposal?.proposal[0].submit_time).format("MMMM D, YYYY h:mm A") }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Deposit end</div>
                  <div class="text-light text-300">
                    {{ inDeposit ? dayjs(proposal?.proposal[0].deposit_end_time).format("MMMM D, YYYY h:mm A") : "-" }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Initial deposit</div>
                  <div class="text-light text-300">{{ initialDeposit }}</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Total deposit</div>
                  <div class="text-light text-300">{{ totalDeposit }}</div>
                </div>
              </div>
            </SimpleCard>
          </div>
          <div class="flex">
            <SimpleCard class="w-full p-10">
              <div class="text-light text-500 text-left mb-8">Messages</div>
              <div
                v-if="proposal?.proposal[0].content['@type'] == '/govgen.gov.v1beta1.TextProposal'"
                class="flex w-full flex-wrap"
              >
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Proposal type</div>
                  <div class="text-light text-300">Text proposal</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Title</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.title }}
                  </div>
                </div>
                <div class="w-full flex-2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Description</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.description }}
                  </div>
                </div>
              </div>
              <div
                v-if="proposal?.proposal[0].content['@type'] == '/cosmos.params.v1beta1.ParameterChangeProposal'"
                class="flex w-full flex-wrap"
              >
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Proposal type</div>
                  <div class="text-light text-300">Parameter Change proposal</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Title</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.title }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Description</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.description }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Changes</div>
                  <div class="text-light text-200">
                    <code>
                      <pre>{{ proposal?.proposal[0].content.changes }}</pre>
                    </code>
                  </div>
                </div>
              </div>
              <div
                v-if="proposal?.proposal[0].content['@type'] == '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal'"
                class="flex w-full flex-wrap"
              >
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Proposal type</div>
                  <div class="text-light text-300">Software Upgrade proposal</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Title</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.title }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Description</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.description }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">Upgrade Plan</div>
                  <div class="text-light text-200">
                    <code>
                      <pre>{{ proposal?.proposal[0].content.plan }}</pre>
                    </code>
                  </div>
                </div>
              </div>
            </SimpleCard>
          </div>
        </div>
      </div>
      <div v-if="isTabSelected('Voters')" class="flex flex-col w-full gap-6">
        <div v-if="proposal && proposal.proposal[0]" class="flex flex-col lg:flex-row w-full gap-6">
          <!-- All Account Votes -->
          <VotePanel
            :voters="proposal.proposal[0].proposal_votes"
            :tallies="tokenTallies"
            :pcts="pctTallies"
            @on-breakdown="() => {}"
          >
            <template #header>All Voters</template>
            <template #type>Accounts Voted</template>
          </VotePanel>
          <!-- All Validator Votes -->
          <VotePanel
            title="Validators"
            :max="5"
            :voters="proposal.proposal[0].proposal_votes"
            :tallies="tokenTallies"
            :pcts="pctTallies"
            @on-breakdown="() => {}"
          >
            <template #header>Validators</template>
            <template #type>Validators Voted</template>
          </VotePanel>
        </div>
      </div>
      <div v-if="isTabSelected('Discussions')" class="w-full lg:w-2/3">
        <GithubComments :term="termDiscussion" />
      </div>
      <div v-if="isTabSelected('Links')" class="w-full">
        <GithubLinks :term="termLink" />
      </div>
    </div>
  </div>
</template>

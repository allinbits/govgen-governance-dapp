<script setup lang="ts">
import { reactive, ref, computed, watch } from "vue";
import { useChainData } from "@/composables/useChainData";
import { useWallet } from "@/composables/useWallet";
import GithubComments from "@/components/proposals/GithubComments.vue";
import GithubLinks from "@/components/proposals/GithubLinks.vue";
import { Deposit } from "@atomone/govgen-types/govgen/gov/v1beta1/gov";
import ProposalVote from "@/components/popups/ProposalVote.vue";
import ProposalDeposit from "@/components/popups/ProposalDeposit.vue";
import chainConfig from "@/chain-config.json";
import { bus } from "@/bus";
import SimpleBadge from "@/components/ui/SimpleBadge.vue";
import SimpleCard from "@/components/ui/SimpleCard.vue";
import UiTabs from "@/components/ui/UiTabs.vue";
import VotePanel from "@/components/proposals/VotePanel.vue";
import Treemap from "@/components/proposals/Treemap.vue";
import { ContextTypes } from "@/types/ui";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import { decToPerc, formatAmount } from "@/utility";
import { useValidators } from "@/composables/useValidators";
import { ValSetQuery, ValidatorsQuery, VotesQuery } from "@/gql/graphql";

type TabNames = "Info" | "Voters" | "Discussions" | "Links";
const voteTypes = ["yes", "no", "veto", "abstain"] as const;
type VoteTypes = (typeof voteTypes)[number];

dayjs.extend(duration);
dayjs.extend(utc);

const props = defineProps<{
  proposalId: number;
  height: number;
}>();
const { getProposal, getParams, getProposalTallies, getStakingStatus, getVotesAsync } = useChainData();
const { validators, getVotingPower } = useValidators(
  props.proposalId,
  props.height != 0 ? props.height.toString() : undefined,
);
const validatorsWithStakeAndVotes = ref<
  Array<
    (ValidatorsQuery["validator_status"][0] | ValSetQuery["proposal_validator_status_snapshot"][0]) & {
      voting_power: number;
      votes: VotesQuery["proposal_vote"];
    }
  >
>([]);

watch(validators, async (valSet, _old) => {
  validatorsWithStakeAndVotes.value = await Promise.all(
    valSet.map(async (val) => {
      if (val.validator.validator_info && val.validator.validator_info.self_delegate_address) {
        const vp = await getVotingPower(val.validator.validator_info.self_delegate_address);
        const votes = await getVotesAsync(val.validator.validator_info.self_delegate_address, props.proposalId);
        if (votes && votes.proposal_vote.length > 0) {
          return {
            ...val,
            voting_power: vp,
            votes: votes.proposal_vote.filter((x) => x.height == votes.proposal_vote[0].height),
          };
        } else {
          return { ...val, voting_power: vp, votes: [] };
        }
      } else {
        return { ...val, voting_power: 0, votes: [] };
      }
    }),
  );
});
const maxValidators = computed(() => {
  return validatorsWithStakeAndVotes.value.length;
});
const votedValidators = computed(() => {
  return validatorsWithStakeAndVotes.value.filter((x) => x.votes.length > 0).length;
});
const validatorTallies = computed<{ [key in VoteTypes]: number }>(() => {
  const tally = {
    yes: 0,
    no: 0,
    veto: 0,
    abstain: 0,
  };

  for (let i = 0; i < validatorsWithStakeAndVotes.value.length; i++) {
    const vp = validatorsWithStakeAndVotes.value[i].voting_power;
    const votes = validatorsWithStakeAndVotes.value[i].votes;
    for (let j = 0; j < votes.length; j++) {
      const optionTally = vp * parseFloat(votes[j].weight);
      switch (votes[j].option) {
        case "VOTE_OPTION_YES":
          tally.yes = tally.yes + optionTally;
          break;
        case "VOTE_OPTION_NO":
          tally.no = tally.no + optionTally;
          break;
        case "VOTE_OPTION_NO_WITH_VETO":
          tally.veto = tally.veto + optionTally;
          break;
        case "VOTE_OPTION_ABSTAIN":
          tally.abstain = tally.abstain + optionTally;
          break;
      }
    }
  }

  return tally;
});

const validatorVoteCounts = computed(() => {
  const tally = {
    yes: 0,
    no: 0,
    veto: 0,
    abstain: 0,
  };

  for (let i = 0; i < validatorsWithStakeAndVotes.value.length; i++) {
    const votes = validatorsWithStakeAndVotes.value[i].votes;
    for (let j = 0; j < votes.length; j++) {
      switch (votes[j].option) {
        case "VOTE_OPTION_YES":
          tally.yes = tally.yes + 1;
          break;
        case "VOTE_OPTION_NO":
          tally.no = tally.no + 1;
          break;
        case "VOTE_OPTION_NO_WITH_VETO":
          tally.veto = tally.veto + 1;
          break;
        case "VOTE_OPTION_ABSTAIN":
          tally.abstain = tally.abstain + 1;
          break;
      }
    }
  }
  return tally;
});

const validatorVoteSum = computed(() => {
  return Object.values(validatorVoteCounts.value).reduce((att, val) => att + val);
});

function getValidatorVotes(voteType: VoteTypes) {
  const data: { name: string; value: number }[] = [];

  for (let i = 0; i < validatorsWithStakeAndVotes.value.length; i++) {
    const votes = validatorsWithStakeAndVotes.value[i].votes;
    const tally = {
      yes: 0,
      no: 0,
      veto: 0,
      abstain: 0,
    };

    for (let j = 0; j < votes.length; j++) {
      switch (votes[j].option) {
        case "VOTE_OPTION_YES":
          tally.yes = tally.yes + 1;
          break;
        case "VOTE_OPTION_NO":
          tally.no = tally.no + 1;
          break;
        case "VOTE_OPTION_NO_WITH_VETO":
          tally.veto = tally.veto + 1;
          break;
        case "VOTE_OPTION_ABSTAIN":
          tally.abstain = tally.abstain + 1;
          break;
      }
    }

    data.push({
      name:
        validatorsWithStakeAndVotes.value[i].validator.validator_descriptions[0].moniker ??
        validatorsWithStakeAndVotes.value[i].validator_address,
      value: tally[voteType],
    });
  }

  return data;
}

const { loggedIn } = useWallet();
const proposal = getProposal(props.proposalId);
const proposalTallies = getProposalTallies(props.proposalId);
const params = getParams();
const staking = getStakingStatus();

const termLink = computed(() => `Link #${props.proposalId}`);
const termDiscussion = computed(() => `Proposal #${props.proposalId}`);

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
const distinctVoters = computed(() => {
  let votes = proposal.value?.proposal[0].proposal_votes ?? [];
  return new Set(votes.map((x) => x.voter_address)).size;
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
    yes: yesVotes.value,
    no: noVotes.value,
    veto: nwvVotes.value,
    abstain: abstainVotes.value,
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

const stakingDenomDisplay = computed(() => {
  return (
    chainConfig.currencies.filter((x) => x.coinMinimalDenom == depositDenom.value)[0]?.coinDenom ?? depositDenom.value
  );
});

const stakingDenomDecimals = computed(() => {
  return chainConfig.currencies.filter((x) => x.coinMinimalDenom == depositDenom.value)[0]?.coinDecimals ?? 0;
});

function calculateWidthForTree(key: VoteTypes) {
  const sum = Object.values(validatorTallies.value).reduce((acc, val) => acc + val);
  if (sum <= 0) {
    return 25;
  }

  return Math.floor((validatorTallies.value[key] / sum) * 100);
}
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
  const now = dayjs.utc();
  const to = dayjs.utc(dateString);
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
        <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3"
          >{{ $t("proposalpage.badges.votingPeriod") }}
        </SimpleBadge>
        <SimpleBadge v-if="turnout < quorum" :type="ContextTypes.PLAIN" icon="warning">
          {{ $t("proposalpage.badges.quorumPending") }}</SimpleBadge
        >
      </template>
      <template v-if="inDeposit">
        <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3">{{
          $t("proposalpage.badges.depositPeriod")
        }}</SimpleBadge>
        <SimpleBadge :type="ContextTypes.PLAIN" icon="warning">{{
          $t("proposalpage.badges.depositPending")
        }}</SimpleBadge>
      </template>
      <SimpleBadge v-if="failed" :type="ContextTypes.FAIL" class="mr-3">{{
        $t("proposalpage.badges.depositFailed")
      }}</SimpleBadge>
      <SimpleBadge v-if="rejected" icon="close" :type="ContextTypes.FAIL" class="mr-3"
        >{{ $t("proposalpage.badges.rejected") }}
      </SimpleBadge>
      <SimpleBadge v-if="passed" :type="ContextTypes.SUCCESS" class="mr-3">{{
        $t("proposalpage.badges.passed")
      }}</SimpleBadge>
    </div>
    <div class="flex mb-12">
      <div class="basic-details flex-grow">
        <h1 class="font-termina text-800 text-light mb-16 pb-2">
          #{{ proposal?.proposal[0].id }}: {{ proposal?.proposal[0].title }}
        </h1>
        <div class="basic-stats flex">
          <div class="quorum mr-16">
            <div class="text-100 text-grey-100 mb-4">
              {{ $t("proposalpage.labels.turnOut") }} | {{ $t("proposalpage.labels.quorum") }}
            </div>
            <div class="text-500 text-light">{{ decToPerc(turnout, 1) }}% | {{ decToPerc(quorum, 1) }}%</div>
          </div>
          <div class="result">
            <template v-if="inDeposit">
              <div class="text-100 text-grey-100 mb-4">{{ $t("proposalpage.labels.expectedResult") }}</div>
              <div class="text-500 text-neg-200">{{ $t("proposalpage.results.willFail") }}</div>
            </template>
            <template v-if="inVoting">
              <div class="text-100 text-grey-100 mb-4">{{ $t("proposalpage.labels.expectedResult") }}</div>
              <div v-if="expectedResult" class="text-500 text-accent-100">
                {{ $t("proposalpage.results.willPass") }}
              </div>
              <div v-else class="text-500 text-neg-200">{{ $t("proposalpage.results.willReject") }}</div>
            </template>
            <template v-if="passed">
              <div class="text-100 text-grey-100 mb-4">{{ $t("proposalpage.labels.result") }}</div>
              <div class="text-500 text-accent-100">{{ $t("proposalpage.results.passed") }}</div>
            </template>
            <template v-if="rejected">
              <div class="text-100 text-grey-100 mb-4">{{ $t("proposalpage.labels.result") }}</div>
              <div class="text-500 text-neg-200">{{ $t("proposalpage.results.rejected") }}</div>
            </template>
            <template v-if="failed">
              <div class="text-100 text-grey-100 mb-4">{{ $t("proposalpage.labels.result") }}</div>
              <div class="text-500 text-neg-200">{{ $t("proposalpage.results.failed") }}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="cta w-96">
        <ProposalVote v-if="loggedIn" :proposal-id="proposal?.proposal[0].id" class="w-full" />

        <SimpleCard v-if="inVoting" class="p-10">
          <div class="text-center text-light text-500">{{ timeTo(proposal?.proposal[0].voting_end_time) }}</div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="bg-gradient rounded h-2 w-2/12" />
          </div>
          <ProposalVote v-if="loggedIn" :proposal-id="proposal?.proposal[0].id" class="w-full" />
          <div
            v-else
            class="justify-center px-6 py-4 rounded bg-gradient text-dark text-300 text-center cursor-pointer w-full"
            @click="
              () => {
                bus.emit('open');
              }
            "
          >
            {{ $t("components.WalletConnect.button") }}
          </div>
        </SimpleCard>
        <SimpleCard v-if="inDeposit" class="p-10">
          <div class="text-center text-light text-500">{{ timeTo(proposal?.proposal[0].deposit_end_time) }}</div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="bg-gradient rounded h-2 w-2/12" />
          </div>
          <ProposalDeposit
            v-if="loggedIn"
            :proposal-id="proposal?.proposal[0].id"
            :min-deposit="minDeposit"
            :total-deposit="totalDeposit"
            :deposit-denom="depositDenom"
          />
          <div
            v-else
            class="justify-center px-6 py-4 rounded bg-gradient text-dark text-300 text-center cursor-pointer w-full"
            @click="
              () => {
                bus.emit('open');
              }
            "
          >
            {{ $t("components.WalletConnect.button") }}
          </div>
        </SimpleCard>
      </div>
    </div>
    <SimpleCard v-if="!inDeposit" class="items-stretch my-6">
      <div class="flex">
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-accent-100 mb-1">{{ $t("voteOptions.yes") }}: {{ decToPerc(yes, 2) }}%</div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(yesVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-neg-200 mb-1">{{ $t("voteOptions.no") }}: {{ decToPerc(no, 2) }}%</div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(noVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-accent-200 mb-1">{{ $t("voteOptions.nwvShort") }}: {{ decToPerc(nwv, 2) }}%</div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(nwvVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-grey-100 mb-1">{{ $t("voteOptions.abstain") }}: {{ decToPerc(abstain, 2) }}%</div>
          <div class="text-100 text-grey-100">
            {{ formatAmount(abstainVotes, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
          </div>
        </div>
      </div>
    </SimpleCard>
    <UiTabs id="proposal-tab" v-model="tabSelected" :options="tabOptions" />
    <div class="flex flex-col pt-[72px]">
      <div v-if="isTabSelected('Info')" class="w-full">
        <div class="flex flex-col gap-6">
          <div class="flex gap-6">
            <SimpleCard class="w-1/2 flex-grow p-10">
              <div class="text-light text-500 text-left mb-8">{{ $t("proposalpage.labels.proposalDescription") }}</div>
              <div class="text-grey-100">
                {{ description }}...
                <template v-if="shouldTrim">
                  <span v-if="!showAll" class="text-light cursor-pointer" @click="showAll = true">{{
                    $t("ui.readMore")
                  }}</span>
                  <span v-if="showAll" class="text-light cursor-pointer" @click="showAll = false">{{
                    $t("ui.readLess")
                  }}</span>
                </template>
              </div>
            </SimpleCard>
            <SimpleCard class="w-1/2 flex-grow p-10">
              <div class="flex w-full flex-wrap">
                <div class="w-full flex-2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposer") }}</div>
                  <div class="text-light text-300">{{ proposal?.proposal[0].proposer_address }}</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.votingStart") }}</div>
                  <div class="text-light text-300">
                    {{ inDeposit ? "-" : dayjs(proposal?.proposal[0].voting_start_time).format("MMMM D, YYYY h:mm A") }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.votingEnd") }}</div>
                  <div class="text-light text-300">
                    {{ inDeposit ? "-" : dayjs(proposal?.proposal[0].voting_end_time).format("MMMM D, YYYY h:mm A") }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.submitTime") }}</div>
                  <div class="text-light text-300">
                    {{ dayjs(proposal?.proposal[0].submit_time).format("MMMM D, YYYY h:mm A") }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.depositEnd") }}</div>
                  <div class="text-light text-300">
                    {{ inDeposit ? dayjs(proposal?.proposal[0].deposit_end_time).format("MMMM D, YYYY h:mm A") : "-" }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.initialDeposit") }}</div>
                  <div class="text-light text-300">
                    {{ formatAmount(initialDeposit, stakingDenomDecimals) }} /
                    {{ formatAmount(minDeposit, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.totalDeposit") }}</div>
                  <div class="text-light text-300">
                    {{ formatAmount(totalDeposit, stakingDenomDecimals) }} /
                    {{ formatAmount(minDeposit, stakingDenomDecimals) }} {{ stakingDenomDisplay }}
                  </div>
                </div>
              </div>
            </SimpleCard>
          </div>
          <div class="flex">
            <SimpleCard class="w-full p-10">
              <div class="text-light text-500 text-left mb-8">{{ $t("proposalpage.labels.messages") }}</div>
              <div
                v-if="proposal?.proposal[0].content['@type'] == '/govgen.gov.v1beta1.TextProposal'"
                class="flex w-full flex-wrap"
              >
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                  <div class="text-light text-300">{{ $t("proposalpage.types.text") }}</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.title") }}</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.title }}
                  </div>
                </div>
                <div class="w-full flex-2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.description") }}</div>
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
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                  <div class="text-light text-300">{{ $t("proposalpage.types.paramChange") }}</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.title") }}</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.title }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.description") }}</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.description }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.changes") }}</div>
                  <div class="text-light text-100">
                    <code>
                      <pre class="text-pretty">{{ proposal?.proposal[0].content.changes }}</pre>
                    </code>
                  </div>
                </div>
              </div>
              <div
                v-if="proposal?.proposal[0].content['@type'] == '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal'"
                class="flex w-full flex-wrap"
              >
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.proposalType") }}</div>
                  <div class="text-light text-300">{{ $t("proposalpage.types.text") }}</div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.title") }}</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.title }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.description") }}</div>
                  <div class="text-light text-300">
                    {{ proposal?.proposal[0].content.description }}
                  </div>
                </div>
                <div class="grow w-1/2 mb-10">
                  <div class="text-grey-100 text-200 mb-2">{{ $t("proposalpage.labels.upgradePlan") }}</div>
                  <div class="text-light text-100">
                    <code>
                      <pre class="text-pretty">{{ proposal?.proposal[0].content.plan }}</pre>
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
            :voters="distinctVoters"
            :denom="stakingDenomDisplay"
            :precision="stakingDenomDecimals"
            :vote-tallies="validatorVoteCounts"
            :token-tallies="tokenTallies"
            @on-breakdown="() => {}"
          >
            <template #header>{{ $t("proposalpage.labels.accountsAll") }}</template>
            <template #type>{{ $t("proposalpage.labels.accountsVoted") }}</template>
          </VotePanel>
          <!-- All Validator Votes -->
          <VotePanel
            :max="maxValidators"
            :voters="votedValidators"
            :denom="stakingDenomDisplay"
            :precision="stakingDenomDecimals"
            :vote-tallies="validatorVoteCounts"
            :token-tallies="validatorTallies"
            @on-breakdown="() => {}"
          >
            <template #header>{{ $t("proposalpage.labels.validators") }}</template>
            <template #type>{{ $t("proposalpage.labels.validatorsVoted") }}</template>
          </VotePanel>
        </div>

        <!-- Treemap Panel-->
        <div class="flex flex-col bg-grey-300 rounded-md w-full p-10">
          <div class="text-light text-500 text-left mb-8">{{ $t("proposalpage.labels.validatorQuota") }}</div>
          <div class="flex flex-row object-contain">
            <template v-if="validatorVoteSum >= 1">
              <div
                v-for="voteType in voteTypes"
                :key="voteType"
                class="flex flex-row h-96 relative"
                :style="[`width: ${calculateWidthForTree(voteType)}%`]"
              >
                <Treemap :data="getValidatorVotes(voteType)" :type="voteType" />
              </div>
            </template>
            <div v-else class="text-grey-100 text-300">
              {{ $t("proposalpage.labels.noValidatorVotes") }}
            </div>
          </div>
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

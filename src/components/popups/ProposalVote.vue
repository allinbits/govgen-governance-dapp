<script setup lang="ts">
import { computed, ref, reactive } from "vue";

import { MsgVote, MsgVoteWeighted } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";
import { VoteOption } from "cosmjs-types/cosmos/gov/v1beta1/gov";

import ModalWrap from "../common/ModalWrap.vue";

import UiSwitch from "../ui/UiSwitch.vue";
import UiState from "../ui/UiState.vue";
import UiInput from "../ui/UiInput.vue";
import UiInfo from "../ui/UiInfo.vue";

import { useWallet } from "../../composables/useWallet";
import { useProposals } from "@/composables/useProposals";

interface Props {
  proposalId?: number;
}
const props = defineProps<Props>();

const isOpen = ref(false);
const isVoted = ref(false);

// const straightState = computed(() => isStraight.value && isOpen.value && !isWeighted.value && !isVoted.value);
const votedState = computed(() => isVoted.value && isOpen.value);

const tabOptions = reactive(["Straight", "Weighted"]);
const tab = ref(tabOptions[0]);

const voteStraight = ref<VoteOption | null>();

const voteList: Partial<Record<VoteOption, { label: string; color: string }>> = {
  [VoteOption.VOTE_OPTION_YES]: { label: "Yes", color: "text-accent-100" },
  [VoteOption.VOTE_OPTION_NO]: { label: "No", color: "text-neg-200" },
  [VoteOption.VOTE_OPTION_NO_WITH_VETO]: { label: "No with Veto", color: "text-neg-200" },
  [VoteOption.VOTE_OPTION_ABSTAIN]: { label: "Abstain", color: "text-grey-100" },
};

// type VoteType = keyof typeof VoteOption;
// const voteStraight = ref<VoteType | null>();

// const voteList: Partial<Record<VoteType, { label: string; color: string }>> = {
//   [VoteOption.VOTE_OPTION_YES]: { label: "Yes", color: "text-accent-100" },
//   VOTE_OPTION_NO: { label: "No", color: "text-neg-200" },
//   VOTE_OPTION_NO_WITH_VETO: { label: "No with Veto", color: "text-neg-200" },
//   VOTE_OPTION_ABSTAIN: { label: "Abstain", color: "text-grey-100" },
// };

const voteWeightedYes = ref<number | null>(null);
const voteWeightedNo = ref<number | null>(null);

const resetVote = () => {
  voteStraight.value = undefined;
  voteWeightedNo.value = null;
  voteWeightedYes.value = null;
};

const toogleModal = (dir: boolean) => {
  isOpen.value = dir;
  isVoted.value = false;
  resetVote();
};

const getVoteWeightedPercent = (data: number) => data * 100;
const checkVoteWeighted = computed(
  () =>
    voteWeightedNo.value !== null &&
    voteWeightedYes.value !== null &&
    voteWeightedNo.value + voteWeightedYes.value === 1,
);

const { voteProposal, voteWeightedProposal } = useProposals();
const { address } = useWallet();

const isWeighted = computed(() => tab.value === "Weighted");
const signVote = async () => {
  if (!props.proposalId) return;

  let voteOptions: MsgVote | MsgVoteWeighted | null = null;

  if (isWeighted.value) {
    if (!checkVoteWeighted.value) return;

    voteOptions = {
      proposalId: BigInt(props.proposalId),
      voter: address.value,
      options: [
        { option: VoteOption.VOTE_OPTION_YES, weight: (voteWeightedYes.value as number).toString() },
        { option: VoteOption.VOTE_OPTION_NO, weight: (voteWeightedNo.value as number).toString() },
      ],
    };
  } else {
    if (!voteStraight.value) return;
    voteOptions = {
      proposalId: BigInt(props.proposalId),
      voter: address.value,
      option: +voteStraight.value,
    };
  }

  const voteProposalFunc = isWeighted.value ? voteProposal : voteWeightedProposal;
  await (voteOptions && voteProposalFunc(voteOptions));
  //TODO: error and get result from chain

  isVoted.value = true;
};
</script>

<template>
  <div class="relative">
    <!-- Normal signed out button -->
    <div>
      <div
        class="justify-center px-6 py-4 rounded bg-gradient text-dark text-300 text-center cursor-pointer"
        @click="toogleModal(true)"
      >
        Vote
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
        <div v-if="!votedState" class="flex flex-col gap-6 relative">
          <span class="text-gradient font-termina text-700 text-center">Vote</span>
          <UiSwitch id="voteType" v-model="tab" :options="tabOptions" class="flex w-2/3 mx-auto" @click="resetVote()" />
          <div class="flex flex-col gap-10">
            <div>
              <Transition mode="out-in">
                <div v-if="tab === 'Straight'" class="flex flex-col px-4">
                  <span v-for="(vote, name, id) in voteList" :key="id" class="w-full">
                    <UiState
                      v-if="vote"
                      v-model="voteStraight"
                      type="radio"
                      :value="name"
                      :label="`Vote “${vote.label.toLocaleUpperCase()}”`"
                      class="w-full"
                    />
                  </span>
                </div>

                <div v-else-if="tab === 'Weighted'" class="flex flex-col gap-10">
                  <p class="text-grey-100 text-center text-200">
                    Define weight for each of the voting options. The sum of weights must be equal to 1.
                  </p>

                  <form class="flex flex-col items-center gap-4">
                    <UiInput
                      v-model="voteWeightedYes"
                      type="number"
                      placeholder="e.g. 0.2"
                      label="Vote “YES”"
                      variant="row"
                      :min="0"
                      :max="1"
                      class="w-full justify-center"
                    />
                    <UiInput
                      v-model="voteWeightedNo"
                      type="number"
                      placeholder="e.g. 0.8"
                      label="Vote “NO”"
                      variant="row"
                      :min="0"
                      :max="1"
                      class="w-full justify-center"
                    />
                  </form>
                </div>
              </Transition>
            </div>

            <div class="flex flex-col gap-4">
              <div v-show="voteStraight || checkVoteWeighted" class="flex flex-col gap-4">
                <button class="px-6 py-4 rounded bg-gradient text-dark text-300 text-center w-full" @click="signVote()">
                  Confirm & Sign
                </button>

                <button
                  class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                >
                  or Copy CLI Command
                </button>
              </div>

              <button
                class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                @click="toogleModal(false)"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div v-show="votedState">
          <UiInfo title="You voted">
            <div class="text-500 text-center font-semibold mb-8 w-full">
              <div v-if="voteStraight" :class="voteList && voteList[voteStraight]?.color">
                {{ voteList && voteList[voteStraight]?.label }}
              </div>

              <div v-if="checkVoteWeighted" class="flex flex-col">
                <span class="text-accent-100">Yes {{ getVoteWeightedPercent(voteWeightedYes ?? 0) }}%</span>
                <span class="text-neg-200">No {{ getVoteWeightedPercent(voteWeightedNo ?? 0) }}%</span>
              </div>
            </div>
          </UiInfo>

          <button
            class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
            @click="toogleModal(false)"
          >
            Done
          </button>
        </div>
      </div>
    </ModalWrap>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

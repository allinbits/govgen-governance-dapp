<script setup lang="ts">
import { computed, ref, reactive } from "vue";

import { MsgVote, MsgVoteWeighted } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";
import { VoteOption } from "cosmjs-types/cosmos/gov/v1beta1/gov";

import ModalWrap from "@/components/common/ModalWrap.vue";

import { useI18n } from "vue-i18n";
import UiSwitch from "@/components/ui/UiSwitch.vue";
import UiState from "@/components/ui/UiState.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiInfo from "@/components/ui/UiInfo.vue";

import { useWallet } from "@/composables/useWallet";
import { useProposals } from "@/composables/useProposals";

interface Props {
  proposalId?: number;
}
const props = defineProps<Props>();

const { t } = useI18n();
const isOpen = ref(false);
const isVoted = ref(false);

// const votedState = computed(() => isVoted.value && isOpen.value);

const tabOptions = reactive(["Straight", "Weighted"]);
const tab = ref(tabOptions[0]);

// Votes info
const voteList: Partial<Record<VoteOption, { label: string; color: string }>> = {
  [VoteOption.VOTE_OPTION_YES]: { label: t("voteOptions.yes"), color: "text-accent-100" },
  [VoteOption.VOTE_OPTION_NO]: { label: t("voteOptions.no"), color: "text-neg-200" },
  [VoteOption.VOTE_OPTION_NO_WITH_VETO]: { label: t("voteOptions.nwv"), color: "text-neg-200" },
  [VoteOption.VOTE_OPTION_ABSTAIN]: { label: t("voteOptions.abstain"), color: "text-grey-100" },
};

// Vote records
const voteStraight = ref<VoteOption | null>();
const voteWeighted = reactive<Partial<Record<VoteOption, { value: number | null }>>>({
  [VoteOption.VOTE_OPTION_YES]: { value: null },
  [VoteOption.VOTE_OPTION_NO]: { value: null },
  [VoteOption.VOTE_OPTION_NO_WITH_VETO]: { value: null },
  [VoteOption.VOTE_OPTION_ABSTAIN]: { value: null },
});

const resetVote = () => {
  // Reset Straight vote
  voteStraight.value = undefined;

  // Reset Weighted votes
  Object.entries(voteWeighted).forEach((el) => (el[1].value = null));
};

const toogleModal = (dir: boolean) => {
  isOpen.value = dir;
  isVoted.value = false;
  resetVote();
};

const getVoteWeightedPercent = (data: number) => data * 100;
const checkVoteWeighted = computed(
  () => Object.entries(voteWeighted).reduce((acc, curr) => acc + (curr[1].value ?? 2), 0) === 1,
);

const { voteProposal, voteWeightedProposal } = useProposals();
const { address } = useWallet();

const signVote = async () => {
  if (!props.proposalId) return;

  let voteOptions: MsgVote | MsgVoteWeighted | null = null;

  if (checkVoteWeighted.value) {
    if (!checkVoteWeighted.value) return;

    voteOptions = {
      proposalId: BigInt(props.proposalId),
      voter: address.value,
      options: [
        {
          option: VoteOption.VOTE_OPTION_YES,
          weight: ((voteWeighted[VoteOption.VOTE_OPTION_YES]?.value ?? -1) as number).toString(),
        },
        {
          option: VoteOption.VOTE_OPTION_NO,
          weight: ((voteWeighted[VoteOption.VOTE_OPTION_NO]?.value ?? -1) as number).toString(),
        },
        {
          option: VoteOption.VOTE_OPTION_NO_WITH_VETO,
          weight: ((voteWeighted[VoteOption.VOTE_OPTION_NO_WITH_VETO]?.value ?? -1) as number).toString(),
        },
        {
          option: VoteOption.VOTE_OPTION_ABSTAIN,
          weight: ((voteWeighted[VoteOption.VOTE_OPTION_ABSTAIN]?.value ?? -1) as number).toString(),
        },
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

  const voteProposalFunc = checkVoteWeighted.value ? voteWeightedProposal : voteProposal;
  await (voteOptions && voteProposalFunc(voteOptions));
  //TODO: handle error and get result from chain

  isVoted.value = true;
};
</script>

<template>
  <div class="relative">
    <div>
      <div
        class="justify-center px-6 py-4 rounded bg-gradient text-dark text-300 text-center cursor-pointer"
        @click="toogleModal(true)"
      >
        {{ $t("components.ProposalVote.cta") }}
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
        <div v-if="!isVoted" class="flex flex-col gap-6 relative">
          <span class="text-gradient font-termina text-700 text-center">{{ $t("components.ProposalVote.cta") }}</span>
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
                    {{ $t("components.ProposalVote.weightedInstructions") }}
                  </p>

                  <form class="flex flex-col items-center gap-2">
                    <span v-for="(vote, key, id) in voteWeighted" :key="id" class="w-full">
                      <UiInput
                        v-if="vote"
                        v-model="vote.value"
                        type="number"
                        placeholder="e.g. 0.25"
                        :label="`Votes “${voteList[key]?.label}”`"
                        variant="row"
                        :min="0"
                        :max="1"
                        class="w-full justify-end"
                      />
                    </span>
                  </form>
                </div>
              </Transition>
            </div>

            <div class="flex flex-col gap-4">
              <div v-show="voteStraight || checkVoteWeighted" class="flex flex-col gap-4">
                <button class="px-6 py-4 rounded bg-gradient text-dark text-300 text-center w-full" @click="signVote()">
                  {{ $t("ui.actions.confirm") }}
                </button>

                <!-- TODO: get CLI cmd-->
                <button
                  class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                >
                  {{ $t("ui.actions.cli") }}
                </button>
              </div>

              <button
                class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                @click="toogleModal(false)"
              >
                {{ $t("ui.actions.cancel") }}
              </button>
            </div>
          </div>
        </div>

        <div v-show="isVoted">
          <UiInfo title="You voted">
            <div class="text-500 text-center font-semibold mb-8 w-full">
              <div v-if="voteStraight" :class="voteList && voteList[voteStraight]?.color">
                {{ voteList && voteList[voteStraight]?.label }}
              </div>

              <div v-if="checkVoteWeighted" class="flex flex-col">
                <span v-for="(vote, key, id) in voteList" :key="id" :class="vote?.color">
                  {{ vote?.label.toLocaleUpperCase() }} {{ getVoteWeightedPercent(voteWeighted[key]?.value ?? 0) }}%
                </span>
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

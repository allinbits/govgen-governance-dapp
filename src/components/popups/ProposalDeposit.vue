<script setup lang="ts">
import { computed, ref } from "vue";

import { MsgDeposit } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";

import chainConfig from "@/chain-config.json";

import ModalWrap from "@/components/common/ModalWrap.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiInfo from "@/components/ui/UiInfo.vue";
import Icon from "@/components/ui/Icon.vue";
import CommonButton from "@/components/ui/CommonButton.vue";

import { useWallet } from "@/composables/useWallet";
import { useClipboard } from "@vueuse/core";
import { useProposals } from "@/composables/useProposals";
import { formatAmount } from "@/utility";

interface Props {
  proposalId?: number;
  minDeposit: number;
  totalDeposit: number;
  depositDenom: string;
}
const props = defineProps<Props>();

const isOpen = ref(false);
const displayState = ref<"deposited" | "CLI" | "pending">("pending");

const depositAmount = ref<number | null>(null);

const cliDepositInput = ref("");

const depositDenomDecimals = computed(() => {
  return chainConfig.currencies.filter((x) => x.coinMinimalDenom == props.depositDenom)[0].coinDecimals ?? 0;
});

const depositDenomDisplay = computed(() => {
  return (
    chainConfig.currencies.filter((x) => x.coinMinimalDenom == props.depositDenom)[0].coinDenom ?? props.depositDenom
  );
});

const resetDeposit = () => (depositAmount.value = null);

const toogleModal = (dir: boolean) => {
  isOpen.value = dir;
  displayState.value = "pending";
  resetDeposit();
};

const { depositProposal } = useProposals();
const { address } = useWallet();

const signDeposit = async (isCLI = false) => {
  if (!depositAmount.value || depositAmount.value <= 0) return;
  if (!props.proposalId) return;

  const depositOptions: MsgDeposit = {
    proposalId: BigInt(props.proposalId),
    depositor: address.value,
    amount: [
      {
        denom: props.depositDenom,
        amount: (depositAmount.value * Math.pow(10, depositDenomDecimals.value))?.toString() ?? "",
      },
    ],
  };

  const depot = await depositProposal(depositOptions, isCLI);
  //TODO: handle error and get result from chain

  cliDepositInput.value = (isCLI ? depot : "") as string;
  displayState.value = isCLI ? "CLI" : "deposited";
};

const { copy, copied, isSupported: isClipboardSupported } = useClipboard();
</script>

<template>
  <div class="relative">
    <div>
      <div
        class="justify-center px-6 py-4 rounded link-gradient text-dark text-300 text-center cursor-pointer"
        @click="toogleModal(true)"
      >
        {{ $t("components.ProposalDeposit.cta") }}
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
        <div v-show="displayState === 'pending'" class="flex flex-col gap-6 relative">
          <span class="text-gradient font-termina text-700 text-center">{{
            $t("components.ProposalDeposit.cta")
          }}</span>
          <div class="flex flex-col gap-10">
            <div>
              <div class="flex flex-col gap-10">
                <p class="text-grey-100 text-center text-200">
                  {{ formatAmount(totalDeposit, depositDenomDecimals) }} /
                  {{ formatAmount(minDeposit, depositDenomDecimals) }} {{ $t("components.ProposalDeposit.act") }}
                </p>

                <form class="flex flex-col items-center gap-2">
                  <UiInput
                    v-model="depositAmount"
                    type="number"
                    placeholder="e.g. 50"
                    :label="$t('components.ProposalDeposit.instructions')"
                    :min="0"
                    :max="Infinity"
                    class="w-full justify-end"
                  />
                </form>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div v-show="(depositAmount ?? -1) > 0" class="flex flex-col gap-4">
                <button
                  class="px-6 py-4 rounded link-gradient text-dark text-300 text-center w-full"
                  @click="signDeposit()"
                >
                  {{ $t("ui.actions.confirm") }}
                </button>

                <button
                  class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                  @click="signDeposit(true)"
                >
                  {{ $t("ui.actions.cli") }}
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
        <div v-show="displayState === 'CLI'" class="flex flex-col gap-10">
          <div class="flex flex-col items-center gap-4">
            <span class="text-gradient font-termina text-700 text-center">{{ $t("components.ProposalVote.cta") }}</span>
            <span class="text-grey-100">{{ $t("components.ui.actions.clicta") }}</span>
          </div>

          <div class="relative">
            <button
              v-if="isClipboardSupported"
              class="absolute top-4 right-4 text-200 hover:text-grey-50 duration-200"
              @click="copy(cliDepositInput)"
            >
              <span v-show="copied">Copied</span>
              <span v-show="!copied" class="flex gap-1">
                <Icon icon="copy" /><span>{{ $t("components.ui.actions.copy") }}</span>
              </span>
            </button>
            <textarea
              ref="CLIVote"
              v-model="cliDepositInput"
              readonly
              class="w-full h-64 px-4 pb-4 pt-12 bg-grey-200 text-grey-50 rounded outline-none resize-none"
            ></textarea>
          </div>

          <div class="flex gap-x-4 items-stretch">
            <CommonButton class="w-full" @click="() => (displayState = 'pending')">{{
              $t("components.ui.actions.back")
            }}</CommonButton>
            <button
              class="w-full text-light bg-grey-200 hover:bg-light hover:text-dark roudned transition-colors duration-200 rounded py-4 px-6"
              @click="toogleModal(false)"
            >
              {{ $t("components.ui.actions.done") }}
            </button>
          </div>
        </div>
        <div v-show="displayState === 'deposited'">
          <UiInfo :title="$t('components.ProposalDeposit.deposited')">
            <div class="text-500 text-center font-semibold mb-8 w-full">
              {{ depositAmount }} {{ depositDenomDisplay }}
            </div>
          </UiInfo>

          <button
            class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
            @click="toogleModal(false)"
          >
            {{ $t("components.ui.actions.done") }}
          </button>
        </div>
      </div>
    </ModalWrap>
  </div>
</template>

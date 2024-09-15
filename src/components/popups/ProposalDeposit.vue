<script setup lang="ts">
import { computed, ref } from "vue";

import { MsgDeposit } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";

import chainConfig from "@/chain-config.json";

import ModalWrap from "@/components/common/ModalWrap.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiInfo from "@/components/ui/UiInfo.vue";
import Icon from "@/components/ui/Icon.vue";
import CommonButton from "@/components/ui/CommonButton.vue";

import { useWallet, Wallets } from "@/composables/useWallet";
import { useClipboard } from "@vueuse/core";
import { useProposals } from "@/composables/useProposals";
import { useTelemetry } from "@/composables/useTelemetry";

import { formatAmount, toPlainObjectString } from "@/utility";
import { DeliverTxResponse } from "@atomone/govgen-types/types";

interface Props {
  proposalId?: number;
  minDeposit: number;
  totalDeposit: number;
  depositDenom: string;
}
const props = defineProps<Props>();

const isOpen = ref(false);
const displayState = ref<"deposited" | "CLI" | "pending" | "error">("pending");

const depositAmount = ref<number | null>(null);
const errorMsg = ref<string>("");
const cliDepositInput = ref("");
const transacting = ref<boolean>(false);
const depositDenomDecimals = computed(() => {
  const currencies = chainConfig.currencies.filter((x) => x.coinMinimalDenom == props.depositDenom);
  if (currencies.length <= 0) {
    return 0;
  }

  return currencies[0].coinDecimals ?? 0;
});

const depositDenomDisplay = computed(() => {
  const currencies = chainConfig.currencies.filter((x) => x.coinMinimalDenom == props.depositDenom);
  if (!currencies) {
    return props.depositDenom;
  }

  return currencies[0].coinDenom ?? props.depositDenom;
});

const resetDeposit = () => (depositAmount.value = null);

const toggleModal = (dir: boolean) => {
  isOpen.value = dir;
  displayState.value = "pending";
  resetDeposit();
};

const { logEvent } = useTelemetry();
const { depositProposal } = useProposals();
const { address, used } = useWallet();

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
  try {
    transacting.value = true;
    const depot = await depositProposal(depositOptions, isCLI);
    if ((depot as DeliverTxResponse).code !== 0) {
      errorMsg.value = (depot as DeliverTxResponse).rawLog ?? toPlainObjectString(depot);
      displayState.value = "error";
    } else {
      cliDepositInput.value = (isCLI ? depot : "") as string;
      displayState.value = isCLI ? "CLI" : "deposited";
    }
  } catch (e) {
    console.log(e);
    errorMsg.value = "" + e;
    displayState.value = "error";
  }
  logEvent("Sign Popup ProposalDeposit", {
    signOption: isCLI ? "CLI" : "GUI",
  });
};

const { copy, copied, isSupported: isClipboardSupported } = useClipboard();
</script>

<template>
  <div class="relative">
    <div>
      <div class="justify-center px-6 py-4 rounded link-gradient text-dark text-300 text-center cursor-pointer"
        @click="() => (logEvent('Click Popup ProposalDeposit'), toggleModal(true))">
        {{ $t("components.ProposalDeposit.cta") }}
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="bg-grey-400 w-full rounded-md max-h-screen overflow-auto">
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
                    <UiInput v-model="depositAmount" type="number" placeholder="e.g. 50"
                      :label="$t('components.ProposalDeposit.instructions')" :min="0" :max="Infinity"
                      class="w-full justify-end" />
                  </form>
                </div>
              </div>

              <div class="flex flex-col gap-4" v-if="!transacting">
                <div v-show="(depositAmount ?? -1) > 0" class="flex flex-col gap-4">
                  <button class="px-6 py-4 rounded link-gradient text-dark text-300 text-center w-full"
                    @click="signDeposit(true)">
                    {{ $t("ui.actions.cli") }}
                  </button>
                  <a href="https://github.com/atomone-hub/govgen-proposals/blob/main/submit-tx-securely.md"
                    target="_blank" class="text-center text-100 text-grey-100 underline">
                    {{ $t("ui.actions.signTxSecurely") }}
                  </a>
                  <button v-if="used != Wallets.addressOnly"
                    class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                    @click="signDeposit()">
                    {{ $t("ui.actions.confirm") }}
                  </button>
                </div>

                <button
                  class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                  @click="toggleModal(false)">
                  {{ $t("ui.actions.cancel") }}
                </button>
              </div>

              <div class="flex flex-col gap-4" v-if="transacting">
                <div class="flex flex-col gap-4 items-center">
                  <Icon icon="loading" :size="2" />
                </div>
              </div>
            </div>
          </div>
          <div v-show="displayState === 'CLI'" class="flex flex-col gap-10">
            <div class="flex flex-col items-center gap-4">
              <span class="text-gradient font-termina text-700 text-center">{{
                $t("components.ProposalVote.cta")
              }}</span>
              <span class="text-grey-100">{{ $t("ui.actions.clicta") }}</span>
            </div>

            <div class="relative">
              <button v-if="isClipboardSupported"
                class="absolute top-4 right-4 text-200 hover:text-grey-50 duration-200" @click="copy(cliDepositInput)">
                <span v-show="copied">{{ $t("uit.actions.copied") }}</span>
                <span v-show="!copied" class="flex gap-1">
                  <Icon icon="copy" /><span>{{ $t("ui.actions.copy") }}</span>
                </span>
              </button>
              <textarea ref="CLIVote" v-model="cliDepositInput" readonly
                class="w-full h-64 px-4 pb-4 pt-12 bg-grey-200 text-grey-50 rounded outline-none resize-none"></textarea>
            </div>

            <div class="flex gap-x-4 items-stretch">
              <CommonButton class="w-full" @click="() => (displayState = 'pending')">{{
                $t("ui.actions.back")
              }}</CommonButton>
              <button
                class="w-full text-light bg-grey-200 hover:bg-light hover:text-dark roudned transition-colors duration-200 rounded py-4 px-6"
                @click="toggleModal(false)">
                {{ $t("ui.actions.done") }}
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
              @click="toggleModal(false)">
              {{ $t("ui.actions.done") }}
            </button>
          </div>
          <div v-show="displayState === 'error'">
            <UiInfo :title="$t('components.ProposalDeposit.error')" type="warning" :circled="true">
              <textarea ref="error" v-model="errorMsg" readonly
                class="w-full h-32 my-4 px-4 pb-4 pt-4 bg-grey-200 text-grey-50 rounded outline-none resize-none"></textarea>
            </UiInfo>

            <button
              class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
              @click="toggleModal(false)">
              {{ $t("ui.actions.done") }}
            </button>
          </div>
        </div>
      </div>
    </ModalWrap>
  </div>
</template>

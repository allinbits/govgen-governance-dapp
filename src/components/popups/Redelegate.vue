<script setup lang="ts">
import { computed, ref } from "vue";

import { MsgBeginRedelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";

import ModalWrap from "@/components/common/ModalWrap.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiInfo from "@/components/ui/UiInfo.vue";
import Icon from "@/components/ui/Icon.vue";
import CommonButton from "@/components/ui/CommonButton.vue";

import { useWallet, Wallets } from "@/composables/useWallet";
import { useClipboard } from "@vueuse/core";
import { useValidators } from "@/composables/useValidators";

import { toPlainObjectString } from "@/utility";
import { DeliverTxResponse } from "@cosmjs/stargate";
import chainConfig from "@/chain-config.json";
import DropDown from "../ui/DropDown.vue";

interface Props {
  validatorAddress: string;
  delegationAmount: bigint;
  validatorList: {
    description: { moniker: string };
    operator_address: string;
  }[];
}
const props = defineProps<Props>();

const isOpen = ref(false);
const displayState = ref<"delegated" | "CLI" | "pending" | "error">("pending");

const redelegationAmount = ref<number | null>(null);
const errorMsg = ref<string>("");
const cliDelegationInput = ref("");
const transacting = ref<boolean>(false);
const delegationDenomDecimals = computed(() => {
  return chainConfig.stakeCurrency.coinDecimals;
});

const delegationDenomDisplay = computed(() => {
  return chainConfig.stakeCurrency.coinDenom;
});

const resetDeposit = () => (redelegationAmount.value = null);

const toggleModal = (dir: boolean) => {
  isOpen.value = dir;
  displayState.value = "pending";
  resetDeposit();
};

const { beginRedelegation } = useValidators();
const { used } = useWallet();
const validatorIndex = ref<number>(0);
const validatorDstAddress = computed(() => {
  return props.validatorList[validatorIndex.value].operator_address;
});
const signRedelegation = async (isCLI = false) => {
  if (!redelegationAmount.value || redelegationAmount.value <= 0) return;
  if (!props.validatorAddress) return;

  const redelegationOptions: Partial<MsgBeginRedelegate> = {
    validatorSrcAddress: props.validatorAddress,
    validatorDstAddress: validatorDstAddress.value,
    amount: {
      denom: chainConfig.stakeCurrency.coinMinimalDenom,
      amount: (redelegationAmount.value * Math.pow(10, delegationDenomDecimals.value))?.toString() ?? "",
    },
  };
  try {
    transacting.value = true;
    const depot = await beginRedelegation(redelegationOptions, isCLI);
    if ((depot as DeliverTxResponse).code !== 0 && !isCLI) {
      transacting.value = false;
      errorMsg.value = (depot as DeliverTxResponse).rawLog ?? toPlainObjectString(depot);
      displayState.value = "error";
    } else {
      transacting.value = false;
      cliDelegationInput.value = (isCLI ? depot : "") as string;
      displayState.value = isCLI ? "CLI" : "delegated";
    }
  } catch (e) {
    console.log(e);
    errorMsg.value = "" + e;
    transacting.value = false;
    displayState.value = "error";
  }
};
const handleValChange = (index: number) => {
  validatorIndex.value = index;
};
const { copy, copied, isSupported: isClipboardSupported } = useClipboard();
</script>

<template>
  <div class="relative">
    <div>
      <div
        class="justify-center px-6 py-4 rounded link-gradient text-dark text-300 text-center cursor-pointer"
        @click="() => toggleModal(true)"
      >
        {{ $t("components.Redelegate.cta") }}
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="bg-grey-400 w-full rounded-md max-h-screen overflow-auto">
        <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
          <div v-show="displayState === 'pending'" class="flex flex-col gap-6 relative">
            <span class="text-gradient font-termina text-700 text-center">{{ $t("components.Redelegate.cta") }}</span
            >3
            <div class="flex flex-col gap-10">
              <div>
                <div class="flex flex-col gap-10">
                  <form class="flex flex-col items-center gap-2">
                    <UiInput
                      v-model="redelegationAmount"
                      type="number"
                      placeholder="e.g. 50"
                      label="Amount to redelegate"
                      :min="0"
                      :max="Number(delegationAmount) / Math.pow(10, delegationDenomDecimals)"
                      class="w-full justify-end"
                    />
                    <DropDown
                      :values="validatorList.map((x) => x.description.moniker)"
                      :model-value="validatorIndex"
                      @select="handleValChange"
                    />
                  </form>
                </div>
              </div>

              <div v-if="!transacting" class="flex flex-col gap-4">
                <div v-show="(redelegationAmount ?? -1) > 0" class="flex flex-col gap-4">
                  <button
                    class="px-6 py-4 rounded link-gradient text-dark text-300 text-center w-full"
                    @click="signRedelegation(true)"
                  >
                    {{ $t("ui.actions.cli") }}
                  </button>
                  <a
                    href="https://github.com/atomone-hub/govgen-proposals/blob/main/submit-tx-securely.md"
                    target="_blank"
                    class="text-center text-100 text-grey-100 underline"
                  >
                    {{ $t("ui.actions.signTxSecurely") }}
                  </a>
                  <button
                    v-if="used != Wallets.addressOnly"
                    class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                    @click="signRedelegation()"
                  >
                    {{ $t("ui.actions.confirm") }}
                  </button>
                </div>

                <button
                  class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                  @click="toggleModal(false)"
                >
                  {{ $t("ui.actions.cancel") }}
                </button>
              </div>

              <div v-if="transacting" class="flex flex-col gap-4">
                <div class="flex flex-col gap-4 items-center">
                  <Icon icon="loading" :size="2" />
                </div>
              </div>
            </div>
          </div>
          <div v-show="displayState === 'CLI'" class="flex flex-col gap-10">
            <div class="flex flex-col items-center gap-4">
              <span class="text-gradient font-termina text-700 text-center">{{ "components.ProposalVote.cta" }}</span>
              <span class="text-grey-100">{{ $t("ui.actions.clicta") }}</span>
            </div>

            <div class="relative">
              <button
                v-if="isClipboardSupported"
                class="absolute top-4 right-4 text-200 hover:text-grey-50 duration-200"
                @click="copy(cliDelegationInput)"
              >
                <span v-show="copied">{{ $t("ui.actions.copied") }}</span>
                <span v-show="!copied" class="flex gap-1">
                  <Icon icon="copy" /><span>{{ $t("ui.actions.copy") }}</span>
                </span>
              </button>
              <textarea
                ref="CLIVote"
                v-model="cliDelegationInput"
                readonly
                class="w-full h-64 px-4 pb-4 pt-12 bg-grey-200 text-grey-50 rounded outline-none resize-none"
              ></textarea>
            </div>

            <div class="flex gap-x-4 items-stretch">
              <CommonButton class="w-full" @click="() => (displayState = 'pending')">{{
                "ui.actions.back"
              }}</CommonButton>
              <button
                class="w-full text-light bg-grey-200 hover:bg-light hover:text-dark roudned transition-colors duration-200 rounded py-4 px-6"
                @click="toggleModal(false)"
              >
                {{ $t("ui.actions.done") }}
              </button>
            </div>
          </div>
          <div v-show="displayState === 'delegated'">
            <UiInfo :title="$t('components.Redelegate.redelegated')">
              <div class="text-500 text-center font-semibold mb-8 w-full">
                {{ redelegationAmount }} {{ delegationDenomDisplay }}
              </div>
            </UiInfo>

            <button
              class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
              @click="toggleModal(false)"
            >
              {{ $t("ui.actions.done") }}
            </button>
          </div>
          <div v-show="displayState === 'error'">
            <UiInfo :title="$t('components.Redelegate.error')" type="warning" :circled="true">
              <textarea
                ref="error"
                v-model="errorMsg"
                readonly
                class="w-full h-32 my-4 px-4 pb-4 pt-4 bg-grey-200 text-grey-50 rounded outline-none resize-none"
              ></textarea>
            </UiInfo>

            <button
              class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
              @click="toggleModal(false)"
            >
              {{ $t("ui.actions.done") }}
            </button>
          </div>
        </div>
      </div>
    </ModalWrap>
  </div>
</template>

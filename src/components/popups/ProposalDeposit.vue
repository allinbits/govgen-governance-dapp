<script setup lang="ts">
import { computed, ref } from "vue";

import { MsgDeposit } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";

import chainConfig from "@/chain-config.json";

import ModalWrap from "@/components/common/ModalWrap.vue";
import UiInput from "@/components/ui/UiInput.vue";
import UiInfo from "@/components/ui/UiInfo.vue";

import { useWallet } from "@/composables/useWallet";
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
const isDeposit = ref(false);
const depositAmount = ref<number | null>(null);

//TODO: dynamic data
const depositDenomDecimals = computed(() => {
  return chainConfig.currencies.filter((x) => x.coinMinimalDenom == props.depositDenom)[0].coinDecimals ?? 0;
});

const depositDenomDisplay = computed(() => {
  return (
    chainConfig.currencies.filter((x) => x.coinMinimalDenom == props.depositDenom)[0].coinDenom ?? props.depositDenom
  );
});
//TODO: end

const resetDeposit = () => (depositAmount.value = null);

const toogleModal = (dir: boolean) => {
  isOpen.value = dir;
  isDeposit.value = false;
  resetDeposit();
};

const { depositProposal } = useProposals();
const { address } = useWallet();

const signDeposit = async () => {
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

  await depositProposal(depositOptions);
  //TODO: handle error and get result from chain

  isDeposit.value = true;
};
</script>

<template>
  <div class="relative">
    <div>
      <div
        class="justify-center px-6 py-4 rounded bg-gradient text-dark text-300 text-center cursor-pointer"
        @click="toogleModal(true)"
      >
        {{ $t("components.ProposalDeposit.cta") }}
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
        <div v-if="!isDeposit" class="flex flex-col gap-6 relative">
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
                    class="w-full justify-end"
                  />
                </form>
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div v-show="(depositAmount ?? -1) > 0" class="flex flex-col gap-4">
                <button
                  class="px-6 py-4 rounded bg-gradient text-dark text-300 text-center w-full"
                  @click="signDeposit()"
                >
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
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div v-show="isDeposit">
          <UiInfo title="You deposited">
            <div class="text-500 text-center font-semibold mb-8 w-full">
              {{ depositAmount }} {{ depositDenomDisplay }}
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

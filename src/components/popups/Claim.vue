<script setup lang="ts">
import { ref } from "vue";

import ModalWrap from "@/components/common/ModalWrap.vue";
import UiInfo from "@/components/ui/UiInfo.vue";
import Icon from "@/components/ui/Icon.vue";
import CommonButton from "@/components/ui/CommonButton.vue";

import { useWallet, Wallets } from "@/composables/useWallet";
import { useClipboard } from "@vueuse/core";
import { useValidators } from "@/composables/useValidators";

import { toPlainObjectString } from "@/utility";
import { DeliverTxResponse } from "@cosmjs/stargate";

interface Props {
  validatorAddress: string[] | undefined;
}

const props = defineProps<Props>();

const isOpen = ref(false);
const displayState = ref<"claimed" | "CLI" | "pending" | "error">("pending");

const errorMsg = ref<string>("");
const cliClaimInput = ref("");
const transacting = ref<boolean>(false);

const toggleModal = (dir: boolean) => {
  isOpen.value = dir;
  displayState.value = "pending";
};

const { collectReward, collectAllRewards } = useValidators();
const { used } = useWallet();

const signClaim = async (isCLI = false) => {
  if (!props.validatorAddress) return;

  try {
    transacting.value = true;
    const depot =
      props.validatorAddress.length > 1
        ? await collectAllRewards(props.validatorAddress, isCLI)
        : await collectReward({ validatorAddress: props.validatorAddress[0] }, isCLI);
    if ((depot as DeliverTxResponse).code !== 0 && !isCLI) {
      transacting.value = false;
      errorMsg.value = (depot as DeliverTxResponse).rawLog ?? toPlainObjectString(depot);
      displayState.value = "error";
    } else {
      transacting.value = false;
      cliClaimInput.value = (isCLI ? depot : "") as string;
      displayState.value = isCLI ? "CLI" : "claimed";
    }
  } catch (e) {
    console.log(e);
    errorMsg.value = "" + e;
    transacting.value = false;
    displayState.value = "error";
  }
};

const { copy, copied, isSupported: isClipboardSupported } = useClipboard();
</script>

<template>
  <div class="relative">
    <div>
      <div
        class="justify-center px-3 py-2 mr-2 rounded link-gradient text-dark text-200 text-center cursor-pointer"
        @click="() => toggleModal(true)"
      >
        {{
          validatorAddress && validatorAddress.length > 1 ? $t("components.Claim.ctamulti") : $t("components.Claim.cta")
        }}
      </div>
    </div>

    <ModalWrap :visible="isOpen" :is-empty="true" @back="isOpen = false">
      <div class="bg-grey-400 w-full rounded-md max-h-screen overflow-auto">
        <div class="px-10 py-12 bg-grey-400 rounded w-screen max-w-[25rem]">
          <div v-show="displayState === 'pending'" class="flex flex-col gap-6 relative">
            <span class="text-gradient font-termina text-700 text-center">{{ $t("components.Claim.cta") }}</span>
            <div class="flex flex-col gap-10">
              <div v-if="!transacting" class="flex flex-col gap-4">
                <div class="flex flex-col gap-4">
                  <button
                    class="px-6 py-4 rounded link-gradient text-dark text-300 text-center w-full"
                    @click="signClaim(true)"
                  >
                    {{ $t("ui.actions.cli") }}
                  </button>
                  <a
                    href="https://github.com/atomone-hub/atom.one/blob/main/submit-tx-securely.md"
                    target="_blank"
                    class="text-center text-100 text-grey-100 underline"
                  >
                    {{ $t("ui.actions.signTxSecurely") }}
                  </a>
                  <button
                    v-if="used != Wallets.addressOnly"
                    class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                    @click="signClaim()"
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
              <span class="text-gradient font-termina text-700 text-center">{{ $t("components.Claim.cta") }}</span>
              <span class="text-grey-100">{{ $t("ui.actions.clicta") }}</span>
            </div>

            <div class="relative">
              <button
                v-if="isClipboardSupported"
                class="absolute top-4 right-4 text-200 hover:text-grey-50 duration-200"
                @click="copy(cliClaimInput)"
              >
                <span v-show="copied">{{ $t("ui.actions.copied") }}</span>
                <span v-show="!copied" class="flex gap-1">
                  <Icon icon="copy" /><span>{{ $t("ui.actions.copy") }}</span>
                </span>
              </button>
              <textarea
                ref="CLIVote"
                v-model="cliClaimInput"
                readonly
                class="w-full h-64 px-4 pb-4 pt-12 bg-grey-200 text-grey-50 rounded outline-none resize-none"
              ></textarea>
            </div>

            <div class="flex gap-x-4 items-stretch">
              <CommonButton class="w-full" @click="() => (displayState = 'pending')">{{
                $t("ui.actions.back")
              }}</CommonButton>
              <button
                class="w-full text-light bg-grey-200 hover:bg-light hover:text-dark roudned transition-colors duration-200 rounded py-4 px-6"
                @click="toggleModal(false)"
              >
                {{ $t("ui.actions.done") }}
              </button>
            </div>
          </div>
          <div v-show="displayState === 'claimed'">
            <UiInfo :title="$t('components.Claim.claimed')">
              <div class="text-500 text-center font-semibold mb-8 w-full"></div>
            </UiInfo>

            <button
              class="px-6 py-4 rounded text-light text-300 text-center bg-grey-200 w-full hover:opacity-50 duration-150 ease-in-out"
              @click="toggleModal(false)"
            >
              {{ $t("ui.actions.done") }}
            </button>
          </div>
          <div v-show="displayState === 'error'">
            <UiInfo :title="$t('components.Claim.error')" type="warning" :circled="true">
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

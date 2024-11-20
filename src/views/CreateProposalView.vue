<script setup lang="ts">
import { ref } from "vue";
import { useProposals } from "@/composables/useProposals";
import CommonButton from "@/components/ui/CommonButton.vue";
import ParameterInput from "@/components/create/ParameterInput.vue";
import { DeliverTxResponse } from "@cosmjs/stargate";
import { useRouter } from "vue-router";
import { bus } from "@/bus";
import { VCodeBlock } from "@wdns/vue-code-block";
import { toPlainObjectString } from "@/utility";
import { useWallet } from "@/composables/useWallet";

type ParameterType = { key: string; subspace: string; value: string };

const router = useRouter();

const { loggedIn } = useWallet();
const {
  createProposal,
  createTextProposalContent,
  createParamChangeProposalContent,
  createUpgradePlanProposalContent,
} = useProposals();

const proposalType = ref<("text" | "param" | "upgrade") | undefined>(undefined);

const title = ref<string>("");
const description = ref<string>("");

const blockHeight = ref<number>(0);
const blockInfo = ref<string>("");
const upgradeName = ref<string>("");

const parameters = ref<ParameterType[]>([{ key: "", subspace: "", value: "" }]);

const isAllValid = ref<boolean>(false);
const isProcessing = ref<boolean>(false);
const trx = ref<Partial<DeliverTxResponse> | undefined>(undefined);

async function create() {
  isProcessing.value = true;
  const defaultProposal = { title: title.value, description: description.value };
  let response: DeliverTxResponse | undefined;

  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (proposalType.value === "text") {
    const prop = createTextProposalContent(defaultProposal);
    response = await createProposal({ initialDeposit: [{ amount: "100000", denom: "uatone" }] }, prop).catch((err) => {
      console.error(err);
      return undefined;
    });
  }

  if (proposalType.value === "param") {
    const prop = createParamChangeProposalContent({ ...defaultProposal, changes: parameters.value });
    response = await createProposal({ initialDeposit: [{ amount: "100000", denom: "uatone" }] }, prop).catch((err) => {
      console.error(err);
      return undefined;
    });
  }

  if (proposalType.value === "upgrade") {
    const prop = createUpgradePlanProposalContent({
      ...defaultProposal,
      plan: { height: BigInt(blockHeight.value), info: blockInfo.value, name: upgradeName.value, time: undefined },
    });
    response = await createProposal({ initialDeposit: [{ amount: "100000", denom: "uatone" }] }, prop).catch((err) => {
      console.error(err);
      return undefined;
    });
  }

  if (!response) {
    bus.emit("error", "Failed to push transaction");
  }

  trx.value = response;
  isProcessing.value = false;
}

function addParameter() {
  parameters.value.push({ key: "", subspace: "", value: "" });
}

function delParameter(index: number) {
  parameters.value.splice(index, 1);
}

async function validate() {
  isAllValid.value = false;

  if (title.value.length <= 0) {
    return;
  }

  if (description.value.length <= 0) {
    return;
  }

  if (proposalType.value === "param" && parameters.value.length >= 1) {
    for (let param of parameters.value) {
      if (param.key.length <= 0 || param.subspace.length <= 0 || param.value.length <= 0) {
        return;
      }
    }
  }

  if (proposalType.value === "upgrade") {
    const variables = [blockHeight, blockInfo, upgradeName];
    for (let variable of variables) {
      if (typeof variable.value === "number" && variable.value <= 0) {
        return;
      }

      if (typeof variable.value === "string" && variable.value.length <= 0) {
        return;
      }
    }
  }

  isAllValid.value = true;
}

function clearProposal() {
  proposalType.value = undefined;
}
</script>

<template>
  <div class="flex flex-col items-center w-full pt-6 gap-8">
    <template v-if="!trx">
      <template v-if="typeof proposalType === 'undefined'">
        <CommonButton class="flex items-center gap-6 self-start" @click="router.push({ path: '/' })">
          <Icon icon="Arrowleft" /> {{ $t("proposalcreate.back") }}
        </CommonButton>
        <span class="text-700 font-termina font-semibold leading-[64px]">{{ $t("proposalcreate.chooseType") }}</span>
        <div class="flex flex-col gap-8">
          <CommonButton @click="proposalType = 'text'">{{ $t("proposalcreate.typeText") }}</CommonButton>
          <CommonButton @click="proposalType = 'param'">{{ $t("proposalcreate.typeParameterChange") }}</CommonButton>
          <CommonButton @click="proposalType = 'upgrade'">{{ $t("proposalcreate.typeUpgrade") }}</CommonButton>
        </div>
      </template>
      <template v-else>
        <CommonButton class="flex items-center gap-6 self-start" @click="clearProposal">
          <Icon icon="Arrowleft" /> {{ $t("proposalcreate.back") }}
        </CommonButton>
        <!-- Common Proposal -->
        <span v-if="proposalType === 'param'" class="text-700 font-termina font-semibold leading-[64px]">{{
          $t("proposalcreate.proposalTypeParam")
        }}</span>
        <span v-else-if="proposalType === 'upgrade'" class="text-700 font-termina font-semibold leading-[64px]">{{
          $t("proposalcreate.proposalTypeUpgrade")
        }}</span>
        <span v-else-if="proposalType === 'text'" class="text-700 font-termina font-semibold leading-[64px]">{{
          $t("proposalcreate.proposalTypeText")
        }}</span>
        <div class="flex flex-col w-full md:w-1/2 gap-3">
          <span>{{ $t("proposalcreate.title") }}</span>
          <input
            v-model="title"
            :placeholder="$t('proposalcreate.title')"
            type="text"
            class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
            :disabled="isProcessing"
            @input="validate"
          />
        </div>
        <div class="flex flex-col w-full md:w-1/2 gap-3">
          <span>{{ $t("proposalcreate.description") }}</span>
          <textarea
            v-model="description"
            placeholder="Proposal Description"
            type="text"
            class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 h-48 outline-none border border-grey-200 focus:border-grey-100"
            :disabled="isProcessing"
            @input="validate"
          ></textarea>
        </div>
        <!-- Parameter Proposal -->
        <div v-if="proposalType === 'param'" class="flex flex-col w-full md:w-1/2 gap-6">
          <span>{{ $t("proposalcreate.changes") }}</span>
          <template v-for="(_, index) in parameters" :key="index">
            <div class="flex flex-col gap-6">
              <div class="flex flex-row w-full justify-between items-center">
                <span class="text-200">{{ $t("proposalcreate.index") }} {{ index }}</span>
                <CommonButton @click="delParameter(index)">
                  <Icon icon="trash" />
                </CommonButton>
              </div>
              <ParameterInput v-model="parameters[index]" :disabled="isProcessing" />
            </div>
          </template>
          <CommonButton @click="addParameter"> {{ $t("proposalcreate.addParameter") }} </CommonButton>
        </div>
        <!-- Upgrade Proposal -->
        <div v-else-if="proposalType === 'upgrade'" class="flex flex-col w-full md:w-1/2 gap-3">
          <span>{{ $t("proposalcreate.blockHeight") }}</span>
          <input
            v-model="blockHeight"
            :placeholder="$t('proposalcreate.blockHeight')"
            type="number"
            class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
            :disabled="isProcessing"
            @input="validate"
          />
          <span>{{ $t("proposalcreate.blockInfo") }}</span>
          <input
            v-model="blockInfo"
            :placeholder="$t('proposalcreate.blockInfo')"
            type="text"
            class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
            :disabled="isProcessing"
            @input="validate"
          />
          <span>{{ $t("proposalcreate.upgradeName") }}</span>
          <input
            v-model="upgradeName"
            :placeholder="$t('proposalcreate.upgradeName')"
            type="text"
            class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
            :disabled="isProcessing"
            @input="validate"
          />
        </div>
        <CommonButton
          v-if="!isProcessing"
          :class="
            isAllValid && loggedIn
              ? ['opacity-100', 'cursor-pointer']
              : ['opacity-50', 'cursor-default', 'hover:cursor-default', 'hover:text-light']
          "
          @click="loggedIn ? (isAllValid ? create() : () => {}) : bus.emit('open')"
        >
          <template v-if="loggedIn">{{ $t("proposalcreate.proposalCTA") }}</template>
          <template v-else>{{ $t("proposalcreate.proposalWallet") }}</template>
        </CommonButton>

        <CommonButton v-else class="cursor-default" disabled>
          <Icon icon="progress" class="animate-spin" />
        </CommonButton>
      </template>
    </template>
    <template v-else>
      <CommonButton class="flex items-center gap-6 self-start" @click="router.push({ path: '/' })">
        <Icon icon="Arrowleft" /> {{ $t("proposalcreate.back") }}
      </CommonButton>
      <span class="text-700 font-termina font-semibold leading-[64px]">{{ $t("proposalcreate.transaction") }}</span>
      <VCodeBlock :code="toPlainObjectString(trx)" prismjs />
    </template>
  </div>
</template>

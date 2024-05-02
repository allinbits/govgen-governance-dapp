<script setup lang="ts">
import { ref } from "vue";
import { useProposals } from "@/composables/useProposals";
import CommonButton from "@/components/ui/CommonButton.vue";
import ParameterInput from "@/components/create/ParameterInput.vue";
import { DeliverTxResponse } from "@cosmjs/stargate";

type ParameterType = { key: string; subspace: string; value: string };

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

async function create() {
  isProcessing.value = true;
  const defaultProposal = { title: title.value, description: description.value };
  let response: DeliverTxResponse | undefined;

  if (proposalType.value === "text") {
    const prop = createTextProposalContent(defaultProposal);
    response = await createProposal({ initialDeposit: [{ amount: "100000", denom: "ugovgen" }] }, prop);
  }

  if (proposalType.value === "param") {
    const prop = createParamChangeProposalContent({ ...defaultProposal, changes: parameters.value });
    response = await createProposal({ initialDeposit: [{ amount: "100000", denom: "ugovgen" }] }, prop);
  }

  if (proposalType.value === "upgrade") {
    const prop = createUpgradePlanProposalContent({
      ...defaultProposal,
      plan: { height: BigInt(blockHeight.value), info: blockInfo.value, name: upgradeName.value, time: undefined },
    });
    response = await createProposal({ initialDeposit: [{ amount: "100000", denom: "ugovgen" }] }, prop);
  }

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
    <template v-if="typeof proposalType === 'undefined'">
      <CommonButton class="flex items-center gap-6 self-start" @click="clearProposal"
        ><Icon icon="Arrowleft" /> Back</CommonButton
      >
      <span class="text-900 font-termina font-semibold leading-[64px]">Choose Type</span>
      <div class="flex flex-col gap-8">
        <CommonButton @click="proposalType = 'text'">Text</CommonButton>
        <CommonButton @click="proposalType = 'param'">Parameter Change</CommonButton>
        <CommonButton @click="proposalType = 'upgrade'">Upgrade</CommonButton>
      </div>
    </template>
    <template v-else>
      <CommonButton class="flex items-center gap-6 self-start" @click="clearProposal"
        ><Icon icon="Arrowleft" /> Back</CommonButton
      >
      <!-- Common Proposal -->
      <span class="text-900 font-termina font-semibold leading-[64px]">Create Proposal</span>
      <div class="flex flex-col w-1/2 gap-3">
        <span>Title</span>
        <input
          placeholder="Proposal Title"
          type="text"
          class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
          v-model="title"
          @input="validate"
        />
      </div>
      <div class="flex flex-col w-1/2 gap-3">
        <span>Description</span>
        <textarea
          v-model="description"
          placeholder="Proposal Description"
          type="text"
          class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 h-48 outline-none border border-grey-200 focus:border-grey-100"
          @input="validate"
        ></textarea>
      </div>
      <!-- Parameter Proposal -->
      <div v-if="proposalType === 'param'" class="flex flex-col w-1/2 gap-6">
        <span>Changes</span>
        <template v-for="(_, index) in parameters" :key="index">
          <div class="flex flex-col gap-6">
            <div class="flex flex-row w-full justify-between items-center">
              <span class="text-200">Index {{ index }}</span>
              <CommonButton @click="delParameter(index)"><Icon icon="trash" /></CommonButton>
            </div>
            <ParameterInput v-model="parameters[index]" />
          </div>
        </template>
        <CommonButton @click="addParameter"> Add Parameter </CommonButton>
      </div>
      <!-- Upgrade Proposal -->
      <div v-else-if="proposalType === 'upgrade'" class="flex flex-col w-1/2 gap-3">
        <span>Block Height</span>
        <input
          v-model="blockHeight"
          placeholder="Block Height"
          type="number"
          class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
          @input="validate"
        />
        <span>Block Info</span>
        <input
          v-model="blockInfo"
          placeholder="Block Info"
          type="text"
          class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
          @input="validate"
        />
        <span>Upgrade Name</span>
        <input
          v-model="upgradeName"
          placeholder="Upgrade"
          type="text"
          class="p-4 bg-grey-400 rounded-md placeholder:text-grey-100 outline-none border border-grey-200 focus:border-grey-100"
          @input="validate"
        />
      </div>
      <CommonButton
        :class="
          isAllValid
            ? ['opacity-100', 'cursor-pointer']
            : ['opacity-50', 'cursor-default', 'hover:cursor-default', 'hover:text-light']
        "
        @click="isAllValid ? create() : () => {}"
      >
        Create
      </CommonButton>
    </template>
  </div>
</template>

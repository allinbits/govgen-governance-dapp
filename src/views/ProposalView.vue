<script setup lang="ts">
import { reactive, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useChainData } from "@/composables/useChainData";

import GithubComments from "@/components/proposals/GithubComments.vue";
import GithubLinks from "@/components/proposals/GithubLinks.vue";
import SimpleBadge from "@/components/ui/SimpleBadge.vue";
import SimpleCard from "@/components/ui/SimpleCard.vue";
import UiTabs from "@/components/ui/UiTabs.vue";
import { ContextTypes } from "@/types/ui";
import * as dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

type TabNames = "Info" | "Voters" | "Discussions" | "Links";

dayjs.extend(duration);
const { getProposal } = useChainData();

const route = useRoute();
const proposal = getProposal(parseInt(route.params.id as string));

const termLink = computed(() => `Link #${route.params.id}`);
const termDiscussion = computed(() => `Proposal #${route.params.id}`);

const tabSelected = ref<TabNames>("Info");
const tabOptions = reactive<TabNames[]>(["Info", "Voters", "Discussions", "Links"]);

const timeTo = (dateString: string) => {
  const now = dayjs();
  const to = dayjs(dateString);
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
      <SimpleBadge :type="ContextTypes.INFO" icon="progress" class="mr-3">Deposit Period </SimpleBadge>
      <SimpleBadge :type="ContextTypes.PLAIN" icon="warning">Quorum not reached</SimpleBadge>
    </div>
    <div class="flex mb-12">
      <div class="basic-details flex-grow">
        <h1 class="font-termina text-800 text-light mb-16 pb-2">
          #{{ proposal?.proposal[0].id }}: {{ proposal?.proposal[0].title }}
        </h1>
        <div class="basic-stats flex">
          <div class="quorum mr-16">
            <div class="text-100 text-grey-100 mb-4">Turn out | Quorum</div>
            <div class="text-500 text-light">58.5% | 40%</div>
          </div>
          <div class="result">
            <div class="text-100 text-grey-100 mb-4">Expected proposal result</div>
            <div class="text-500 text-neg-200">Will Be Rejected</div>
          </div>
        </div>
      </div>
      <div class="cta w-96">
        <SimpleCard class="p-10">
          <div class="text-center text-light text-500">{{ timeTo(proposal?.proposal[0].deposit_end_time) }}</div>
          <div class="progress-bar w-full h-2 bg-grey-200 rounded my-6">
            <div class="bg-gradient rounded h-2 w-2/12" />
          </div>
          <!-- Replace with button from other PR -->
          <div class="button w-full bg-gradient rounded text-dark text-300 text-center px-6 py-4">Vote</div>
        </SimpleCard>
      </div>
    </div>
    <SimpleCard class="items-stretch my-6">
      <div class="flex">
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-accent-100 mb-1">Yes: 60.00%</div>
          <div class="text-100 text-grey-100">1,000,000,000 TOKEN</div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-neg-200 mb-1">No: 20.00%</div>
          <div class="text-100 text-grey-100">1,000,000,000 TOKEN</div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-accent-200 mb-1">Veto: 15.00%</div>
          <div class="text-100 text-grey-100">1,000,000,000 TOKEN</div>
        </div>
        <div class="w-25 py-8 text-center flex-1">
          <div class="text-500 text-grey-100 mb-1">Abstain: 5.00%</div>
          <div class="text-100 text-grey-100">1,000,000,000 TOKEN</div>
        </div>
      </div>
    </SimpleCard>
    <UiTabs id="proposal-tab" v-model="tabSelected" :options="tabOptions" />
    <div class="flex flex-col pt-[72px]">
      <div v-if="isTabSelected('Info')" class="w-full">info</div>
      <div v-if="isTabSelected('Voters')" class="w-full">voters</div>
      <div v-if="isTabSelected('Discussions')" class="w-full lg:w-2/3">
        <GithubComments :term="termDiscussion" />
      </div>
      <div v-if="isTabSelected('Links')" class="w-full">
        <GithubLinks :term="termLink" />
      </div>
    </div>
  </div>
</template>

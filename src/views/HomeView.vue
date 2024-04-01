<script setup lang="ts">
import { computed, ref, watch } from "vue";

import ProposalCard from "@/components/home/ProposalCard.vue";
import CommentCount from "@/components/home/CommentCount.vue";
import Search from "@/components/ui/Search.vue";
import DropDown from "@/components/ui/DropDown.vue";
import ProposalStatus from "@/components/ui/ProposalStatus.vue";
import { PropStatus } from "@/types/proposals";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/apolloClient";

import { useChainData } from "@/composables/useChainData";

const typeFilterIndex = ref(0);
const activityFilterIndex = ref(0);
const limit = ref(16);
const offset = ref(0);
const searchText = ref("");
const { getProposals, getProposalsAsync } = useChainData();

const proposals = getProposals("active", limit.value, offset.value);

const sortToOrder = computed(() => {
  switch (activityFilterIndex.value) {
    default:
    case 0:
      return "active";
    case 1:
      return "passed";
    case 2:
      return "rejected";
    case 3:
      return "failed";
  }
});
const filterToStatus = computed(() => {
  switch (typeFilterIndex.value) {
    default:
    case 0:
      return null;
    case 1:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case 2:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case 3:
      return "PROPOSAL_STATUS_PASSED";
    case 4:
      return "PROPOSAL_STATUS_REJECTED";
    case 5:
      return "PROPOSAL_STATUS_FAILED";
  }
});

watch(filterToStatus, async (newType, oldType) => {
  if (newType !== oldType) {
    provideApolloClient(apolloClient);
    if (newType != null) {
      const res = await getProposalsAsync(sortToOrder.value, limit.value, offset.value, newType);
      if (res) {
        proposals.value = res;
      }
    } else {
      const res = await getProposalsAsync(sortToOrder.value, limit.value, offset.value);
      if (res) {
        proposals.value = res;
      }
    }
  }
});
watch(sortToOrder, async (newOrder, oldOrder) => {
  if (newOrder !== oldOrder) {
    provideApolloClient(apolloClient);
    if (filterToStatus.value != null) {
      const res = await getProposalsAsync(sortToOrder.value, limit.value, offset.value, filterToStatus.value);
      if (res) {
        proposals.value = res;
      }
    } else {
      const res = await getProposalsAsync(sortToOrder.value, limit.value, offset.value);
      if (res) {
        proposals.value = res;
      }
    }
  }
});
const orderedProposals = computed(() => {
  return proposals.value?.all_proposals;
});
const links = ref([
  { title: "Twitter", url: "https://twitter.com/_govgen", icon: "twitter" },
  { title: "Discord", url: "https://discord.com/invite/atomone", icon: "discord" },
  { title: "Github", url: "https://github.com/atomone-hub", icon: "github" },
]);

function setActivityFilterIndex(idx: number) {
  // Needs integration to filter proposals
  activityFilterIndex.value = idx;
}

function setTypeFilterIndex(idx: number) {
  // Needs integration to filter proposals
  typeFilterIndex.value = idx;
}

function onSearchInput() {
  // Needs integration to filter proposals
  console.log(searchText.value);
}
</script>

<template>
  <div class="flex flex-col w-full pb-[72px]">
    <!-- Chain Section -->
    <div class="flex flex-col gap-8 pt-8 md:pt-[72px]">
      <div class="flex gap-4">
        <Icon icon="chain" class="aspect-square text-900" />
        <div class="font-termina text-700 md:text-1000 font-semibold leading-[80px]">GovGen</div>
      </div>
      <div class="flex flex-col gap-8">
        <!-- Chain Title -->
        <!-- Chain Links -->
        <div class="flex flex-row gap-6 text-grey-100 flex-wrap">
          <a href="https://govgen.io" target="_blank" class="flex flex-row gap-2 hover:text-grey-50">
            <Icon icon="link" /><span>Website</span>
          </a>
          <span>|</span>
          <!-- Chain Socials -->
          <div class="flex flex-row gap-4 items-center justify-center">
            <a v-for="(linkData, index) in links" :key="index" class="flex items-center" :href="linkData.url">
              <Icon :icon="linkData.icon" class="hover:text-grey-50 hover:cursor-pointer" />
            </a>
          </div>
        </div>
        <!-- Chain Description -->
        <p
          class="text-grey-100 text-300 lg:w-[656px] font-normal text-left text-pretty after:absolute after:block after:left-0 after:w-full after:bg-grey-300 after:h-px"
        >
          <span class="block pb-8 lg:pb-[72px]"> {{ $t("homepage.intro") }} </span>
        </p>
      </div>
    </div>
    <!-- Search Box, and Filters -->
    <div
      class="flex flex-col w-full justify-start items-center pt-12 lg:pt-[104px] lg:flex-row gap-4 lg:gap-6 lg:justify-between"
    >
      <div class="flex flex-col gap-10 w-full lg:flex-row lg:items-center">
        <div class="font-termina text-500 lg:text-600 xl:text-700">{{ $t("homepage.proposalsHeader") }}</div>
        <Search v-model="searchText" @input="onSearchInput">
          <Icon icon="search" />
        </Search>
      </div>
      <!-- Filters -->
      <div class="flex flex-col gap-4 w-full justify-start md:flex-row lg:items-center lg:justify-end">
        <!-- Select Type -->
        <DropDown
          v-model="typeFilterIndex"
          :values="['All Proposals', 'Deposit', 'Voting', 'Passed', 'Rejected', 'Failed']"
          class="w-full lg:w-fit"
          @select="setTypeFilterIndex"
        />
        <!-- Show 'x' First -->
        <DropDown
          v-model="activityFilterIndex"
          :values="['Active First', 'Passed First', 'Rejected First', 'Failed First']"
          class="w-full lg:w-fit"
          @select="setActivityFilterIndex"
        />
      </div>
    </div>
    <!-- Proposal View -->
    <div
      v-if="proposals"
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mt-[72px]"
    >
      <ProposalCard v-for="proposal in orderedProposals" :key="proposal.id" :link="'/proposals/' + proposal.id">
        <template #header
          ><ProposalStatus
            :status="PropStatus[(proposal.status ?? 'PROPOSAL_STATUS_UNSPECIFIED') as keyof typeof PropStatus]"
        /></template>
        <template #number>#{{ proposal.id }}</template>
        <div>{{ proposal.title }}</div>
        <template #footer>
          <div class="flex flex-row text-200 text-grey-100 font-medium items-center justify-between w-full">
            <span></span>
            <div class="flex flex-row gap-4">
              <!-- Vote Count-->
              <div class="flex flex-row items-center gap-1">
                <Icon icon="voters" />
                <span>{{ proposal.proposal_votes_aggregate.aggregate?.count ?? 0 }}</span>
              </div>
              <!-- Comment Count -->
              <div class="flex flex-row items-center gap-1">
                <Icon icon="comments" />
                <CommentCount :proposal="proposal.id" />
              </div>
            </div>
          </div>
        </template>
      </ProposalCard>
    </div>
  </div>
</template>

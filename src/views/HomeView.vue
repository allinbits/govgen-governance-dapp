<script setup lang="ts">
import { ref } from "vue";

import ProposalCard from "@/components/home/ProposalCard.vue";
import Search from "@/components/ui/Search.vue";
import DropDown from "@/components/ui/DropDown.vue";
import ProposalStatus from "@/components/ui/ProposalStatus.vue";
import { PropStatus } from "@/types/proposals";

import { useChainData } from "@/composables/useChainData";

const typeFilterIndex = ref(0);
const activityFilterIndex = ref(0);
const searchText = ref("");
const { getProposals } = useChainData();

const proposals = getProposals();

const links = ref([
  { title: "Twitter", url: "#", icon: "twitter" },
  { title: "Discord", url: "#", icon: "discord" },
  { title: "Telegram", url: "#", icon: "telegram" },
  { title: "Github", url: "#", icon: "github" },
  { title: "LinkedIn", url: "#", icon: "LinkedIn" },
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
    <div class="flex flex-col gap-4 py-[72px] border-b border-grey-300 md:flex-row">
      <div class="flex flex-col">
        <Icon icon="chain" class="mt-3 aspect-square w-14 h-14 text-800" />
      </div>
      <div class="flex flex-col gap-8">
        <!-- Chain Title -->
        <div class="font-termina text-600 md:text-[72px] font-semibold leading-[80px]">GovGen</div>
        <!-- Chain Links -->
        <div class="flex flex-row gap-6 text-grey-100 flex-wrap">
          <a href="https://govgen.io" target="_blank" class="flex flex-row gap-3 hover:text-grey-50">
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
        <div class="text-grey-100 text-300 lg:w-[656px] font-interVar font-normal text-left text-pretty">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ultrices mauris, et sollicitudin enim.
          Vestibulum eget viverra elit. Mauris at turpis luctus, malesuada sapien ultricies, molestie nisi. Ut viverra
          volutpat nibh vitae porttitor.
        </div>
      </div>
    </div>
    <!-- Search Box, and Filters -->
    <div class="flex flex-col w-full justify-start items-center pt-[104px] lg:flex-row gap-6 lg:justify-between">
      <div class="flex flex-col gap-6 w-full lg:flex-row lg:items-center">
        <div class="font-termina text-700">All Proposals</div>
        <Search v-model="searchText" @input="onSearchInput">
          <Icon icon="search" />
        </Search>
      </div>
      <!-- Filters -->
      <div class="flex flex-col gap-6 w-full justify-start lg:flex-row lg:items-center lg:justify-end">
        <!-- Select Type -->
        <DropDown
          v-model="typeFilterIndex"
          :values="['All Proposals', 'Voting', 'Passed', 'Rejected', 'Failed']"
          @select="setTypeFilterIndex"
        />
        <!-- Show 'x' First -->
        <DropDown
          v-model="activityFilterIndex"
          :values="['Active First', 'Passed First', 'Rejected First', 'Failed First']"
          @select="setActivityFilterIndex"
        />
      </div>
    </div>
    <!-- Proposal View -->
    <div v-if="proposals" class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[72px]">
      <ProposalCard v-for="proposal in proposals.all_proposals" :key="proposal.id" link="#">
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
                <span>500</span>
              </div>
            </div>
          </div>
        </template>
      </ProposalCard>
    </div>
  </div>
</template>

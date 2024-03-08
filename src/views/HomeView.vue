<script setup lang="ts">
import { ref } from "vue";

import ProposalCard from "@/components/home/ProposalCard.vue";
import Search from "@/components/ui/Search.vue";
import DropDown from "@/components/ui/DropDown.vue";
import ProposalStatus from "@/components/ui/ProposalStatus.vue";

const typeFilterIndex = ref(0);
const activityFilterIndex = ref(0);
const searchText = ref("");

const links = ref([
  { title: "Twitter", url: "#", icon: "twitter" },
  { title: "Discord", url: "#", icon: "discord" },
  { title: "Telegram", url: "#", icon: "telegram" },
  { title: "Github", url: "#", icon: "github" },
  { title: "LinkedIn", url: "#", icon: "LinkedIn" },
]);

function setActivityFilterIndex(idx: number) {
  activityFilterIndex.value = idx;
}

function setTypeFilterIndex(idx: number) {
  typeFilterIndex.value = idx;
}

function onSearchInput() {
  console.log(searchText.value);
}
</script>

<template>
  <div class="flex flex-col w-full pb-[72px]">
    <!-- Chain Section -->
    <div class="flex flex-row gap-4 py-[72px] border-b border-grey-300">
      <div class="flex flex-col">
        <Icon icon="chain" class="mt-3 aspect-square w-14 h-14 text-800" />
      </div>
      <div class="flex flex-col gap-8">
        <!-- Chain Title -->
        <div class="font-termina text-[72px] font-semibold leading-[80px]">GovGen</div>
        <!-- Chain Links -->
        <div class="flex flex-row gap-6 text-grey-100">
          <a href="https://govgen.io" target="_blank" class="flex flex-row gap-3 hover:text-grey-50">
            <Icon icon="link" /><span>Website</span>
          </a>
          <span>|</span>
          <!-- Chain Socials -->
          <div class="flex flex-row gap-4 items-center justify-center">
            <a class="flex items-center" v-for="(linkData, index) in links" :key="index" :href="linkData.url">
              <Icon :icon="linkData.icon" class="hover:text-grey-50 hover:cursor-pointer" />
            </a>
          </div>
        </div>
        <!-- Chain Description -->
        <div class="text-grey-100 text-300 w-[656px] font-interVar font-normal text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ultrices mauris, et sollicitudin enim.
          Vestibulum eget viverra elit. Mauris at turpis luctus, malesuada sapien ultricies, molestie nisi. Ut viverra
          volutpat nibh vitae porttitor.
        </div>
      </div>
    </div>
    <!-- Search Box, and Filters -->
    <div class="flex flex-row w-full justify-between items-center pt-[104px]">
      <div class="flex flex-row gap-10 items-center">
        <div class="font-termina text-700">All Proposals</div>
        <Search v-model="searchText" @input="onSearchInput">
          <Icon icon="search" />
        </Search>
      </div>
      <!-- Filters -->
      <div class="flex flex-row gap-4 items-center">
        <!-- Select Type -->
        <DropDown
          :values="['All Proposals', 'Voting', 'Passed', 'Rejected', 'Failed']"
          v-model="typeFilterIndex"
          @select="setTypeFilterIndex"
        />
        <!-- Show 'x' First -->
        <DropDown
          :values="['Active First', 'Passed First', 'Rejected First', 'Failed First']"
          v-model="activityFilterIndex"
          @select="setActivityFilterIndex"
        />
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6 mt-[72px]">
      <ProposalCard v-for="(proposal, index) in 12" :key="index" link="#">
        <template v-slot:header><ProposalStatus status="voting" /></template>
        <template v-slot:number>#{{ index }}</template>
        <div>Development Approval Request for the AtomOne Alignment Treasury</div>
        <template v-slot:footer>
          <div class="flex flex-row text-200 text-grey-100 font-medium items-center justify-between w-full">
            <span>Type</span>
            <div class="flex flex-row gap-4">
              <!-- Vote Count-->
              <div class="flex flex-row items-center gap-1">
                <Icon icon="voters" />
                <span>500</span>
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

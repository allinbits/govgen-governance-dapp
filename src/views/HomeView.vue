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
import { useTelemetry } from "@/composables/useTelemetry";
import { bus } from "@/bus";
import { useRouter } from "vue-router";

const router = useRouter();
const typeFilterIndex = ref(0);
const activityFilterIndex = ref(0);
const limit = ref(16);
const offset = ref(0);
const searchText = ref("");
const { getProposals, getProposalsAsync } = useChainData();

const proposals = getProposals("active", limit.value, offset.value);

const searchString = computed(() => {
  if (searchText.value.trim().length >= 1) {
    return searchText.value.trim();
  } else {
    return undefined;
  }
});
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
    try {
      const res = await getProposalsAsync(
        sortToOrder.value,
        limit.value,
        offset.value,
        newType ?? undefined,
        searchString.value,
      );
      if (res) {
        proposals.value = res;
      }
    } catch (_e) {
      bus.emit("error");
    }
  }
});
watch(searchString, async (newSearch, oldSearch) => {
  if (newSearch !== oldSearch) {
    provideApolloClient(apolloClient);
    try {
      const res = await getProposalsAsync(
        sortToOrder.value,
        limit.value,
        offset.value,
        filterToStatus.value ?? undefined,
        searchString.value,
      );
      if (res) {
        proposals.value = res;
      }
    } catch (_e) {
      bus.emit("error");
    }
  }
});
watch(sortToOrder, async (newOrder, oldOrder) => {
  if (newOrder !== oldOrder) {
    provideApolloClient(apolloClient);
    try {
      const res = await getProposalsAsync(
        sortToOrder.value,
        limit.value,
        offset.value,
        filterToStatus.value ?? undefined,
        searchString.value,
      );
      if (res) {
        proposals.value = res;
      }
    } catch (_e) {
      bus.emit("error");
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
  { title: "Forum", url: "https://commonwealth.im/govgen", icon: "commonwealth" },
]);
const hasMore = computed(() => {
  return (proposals.value?.proposal_aggregate.aggregate?.count ?? 0) > offset.value + limit.value;
});
function next() {
  offset.value += limit.value;
}

function prev() {
  offset.value = offset.value <= limit.value ? 0 : offset.value - limit.value;
}

watch(offset, async (newOffset, oldOffset) => {
  if (newOffset != oldOffset) {
    provideApolloClient(apolloClient);
    try {
      if (filterToStatus.value != null) {
        const res = await getProposalsAsync(
          sortToOrder.value,
          limit.value,
          newOffset,
          filterToStatus.value,
          searchString.value,
        );
        if (res) {
          proposals.value = res;
        }
      } else {
        const res = await getProposalsAsync(sortToOrder.value, limit.value, newOffset, undefined, searchString.value);
        if (res) {
          proposals.value = res;
        }
      }
    } catch (_e) {
      bus.emit("error");
    }
  }
});

const { logEvent } = useTelemetry();
const typeFilter = ["All Proposals", "Deposit", "Voting", "Passed", "Rejected", "Failed"];
const activityFilter = ["Active First", "Passed First", "Rejected First", "Failed First"];

function setActivityFilterIndex(idx: number) {
  // Needs integration to filter proposals
  activityFilterIndex.value = idx;
  logEvent("Select Prop Activity Filter", { filterActivityOption: typeFilter[idx] });
}

function setTypeFilterIndex(idx: number) {
  // Needs integration to filter proposals
  typeFilterIndex.value = idx;
  logEvent("Select Prop Type Filter", { filterTypeOption: activityFilter[idx] });
}

function onSearchInput() {
  // Needs integration to filter proposals
  console.log(searchText.value);
}
</script>

<template>
  <div class="flex flex-col w-full pb-[72px]">
    <div class="flex flex-row pt-8 md:pt-[72px]">
      <!-- Chain Section -->
      <div class="flex flex-col gap-8 w-3/4">
        <div class="flex gap-4">
          <Icon icon="chain" class="aspect-square text-900" />
          <div class="font-termina text-700 md:text-1000 font-semibold leading-[80px]">{{ $t("homepage.title") }}</div>
        </div>
        <div class="flex flex-col gap-8">
          <!-- Chain Title -->
          <!-- Chain Links -->
          <div class="flex flex-row gap-6 text-grey-100 flex-wrap">
            <a href="https://govgen.io" target="_blank" class="flex flex-row gap-2 hover:text-grey-50"
              @click="logEvent('Click Home Website')">
              <Icon icon="link" /><span>{{ $t("homepage.website") }}</span>
            </a>
            <span>|</span>
            <!-- Chain Socials -->
            <div class="flex flex-row gap-4 items-center justify-center">
              <a v-for="(linkData, index) in links" :key="index" class="flex items-center" :href="linkData.url"
                @click="logEvent('Click Home Social', { socialOption: linkData.title })" target="_blank">
                <Icon :icon="linkData.icon" class="hover:text-grey-50 hover:cursor-pointer" />
              </a>
            </div>
          </div>
          <!-- Chain Description -->
          <p
            class="text-grey-100 text-300 lg:w-[656px] font-normal text-left text-pretty after:absolute after:block after:left-0 after:w-full after:bg-grey-300 after:h-px">
            <i18n-t keypath="homepage.intro" tag="span" class="block pb-8 lg:pb-[72px]">
              <a href="https://commonwealth.im/govgen" class="text-light text-300" target="_blank">{{
                $t('homepage.forumLinkText') }}</a>
            </i18n-t>
          </p>
        </div>
      </div>
      <div class="w-1/4">
        <div
          class="flex items-center justify-center gap-4 px-6 py-4 rounded link-gradient text-dark text-center cursor-pointer w-full font-medium"
          @click="router.push({ path: '/create' })">
          <Icon icon="plus" class="font-medium text-400"></Icon>
          <span class="text-300">{{ $t("homepage.createProposal") }}</span>
        </div>
      </div>
    </div>
    <!-- Search Box, and Filters -->
    <div
      class="flex flex-col w-full justify-start items-center pt-12 lg:pt-[104px] lg:flex-row gap-4 lg:gap-6 lg:justify-between">
      <div class="flex flex-col gap-10 w-full lg:flex-row lg:items-center">
        <div class="font-termina text-500 lg:text-600 xl:text-700">{{ $t("homepage.proposalsHeader") }}</div>
        <Search v-model="searchText" @input="onSearchInput">
          <Icon icon="search" />
        </Search>
      </div>
      <!-- Filters -->
      <div class="flex flex-col gap-4 w-full justify-start md:flex-row lg:items-center lg:justify-end">
        <!-- Select Type -->
        <DropDown v-model="typeFilterIndex" :values="typeFilter" class="w-full lg:w-fit" @select="setTypeFilterIndex" />
        <!-- Show 'x' First -->
        <DropDown v-model="activityFilterIndex" :values="activityFilter" class="w-full lg:w-fit"
          @select="setActivityFilterIndex" />
      </div>
    </div>
    <!-- Proposal View -->
    <div v-if="proposals"
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mt-[72px]">
      <ProposalCard v-for="proposal in orderedProposals" :key="proposal.id" :link="'/proposals/' + proposal.id">
        <template #header>
          <ProposalStatus
            :status="PropStatus[(proposal.status ?? 'PROPOSAL_STATUS_UNSPECIFIED') as keyof typeof PropStatus]" />
        </template>
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

    <div v-if="proposals" class="flex flex-row justify-end pt-12 gap-4">
      <Icon icon="Arrowleftend" class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': offset > 0 }" @click="() => {
          offset = 0;
        }
          " />
      <Icon icon="Arrowleft" class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': offset > 0 }" @click="() => {
          if (offset > 0) {
            prev();
          }
        }
          " />
      <!-- Page Numbers -->
      <Icon icon="Arrowright" class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': hasMore }" @click="() => {
          next();
        }
          " />
      <Icon icon="Arrowrightend" class="text-400 text-grey-100"
        :class="{ 'text-light hover:opacity-75 cursor-pointer': hasMore }" @click="() => {
          offset = Math.floor((proposals?.proposal_aggregate.aggregate?.count ?? 0) / limit) * limit;
        }
          " />
    </div>
  </div>
</template>

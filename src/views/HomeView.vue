<script setup lang="ts">
import ProposalCard from "../components/home/ProposalCard.vue";
import Search from "../components/ui/Search.vue";

const links = [
  { title: "Twitter", url: "#", icon: "twitter" },
  { title: "Discord", url: "#", icon: "discord" },
  { title: "Telegram", url: "#", icon: "telegram" },
  { title: "Github", url: "#", icon: "github" },
  { title: "LinkedIn", url: "#", icon: "LinkedIn" },
];
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
            <a class="flex items-center" v-for="(linkData, index) in links" :key="index" :href="linkData.link">
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
        <InputSearch v-model="searchText" @input="handleSearchInput">
          <Icon icon="search" />
        </InputSearch>
      </div>
      <!-- Filters -->
      <div class="flex flex-row gap-4 items-center">
        <div class="text-300">Filter 1</div>
        <div class="text-300">Filter 2</div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-6 mt-[72px]">
      <ProposalCard v-for="(proposal, index) in 12" :key="index" link="#">
        <template v-slot:header>Header</template>
        <template v-slot:number>#{{ index }}</template>
        <div>Development Approval Request for the AtomOne Alignment Treasury</div>
        <template v-slot:footer>Footer</template>
      </ProposalCard>
    </div>
  </div>
</template>

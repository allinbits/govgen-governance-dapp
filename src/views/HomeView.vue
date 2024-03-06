<script setup lang="ts">
import ChainSection from "../components/ChainSection.vue";
import ProposalCard from "../components/ProposalCard.vue";
import InputSearch from "../components/InputSearch.vue";
</script>

<template>
  <div class="flex flex-col w-full pb-[72px]">
    <ChainSection />
    <div class="flex flex-row w-full justify-between items-center pt-[104px]">
      <!-- Search Box -->
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

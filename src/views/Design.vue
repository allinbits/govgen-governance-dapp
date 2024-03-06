<script lang="ts" setup>
import { ref } from "vue";

import InputDropDown from "../components/InputDropDown.vue";
import ProposalCard from "../components/ProposalCard.vue";
import InputSearch from "../components/InputSearch.vue";

const dropDownIndex = ref(0);
const searchText = ref<string>("");

function handleDropDownSelect(index: number) {
  dropDownIndex.value = index;
  console.log(`Selected: `, index);
}

function handleSearchInput() {
  console.log(searchText.value);
}
</script>

<template>
  <div>
    <!-- Input Drop Down -->
    <InputDropDown
      :index="dropDownIndex"
      :values="['red', 'yellow', 'green', 'blue', 'purple']"
      v-model="dropDownIndex"
      @select="handleDropDownSelect"
    />

    <!-- Proposal Card -->
    <ProposalCard>
      <div slot="header">Header</div>
      <div>Hello World</div>
      <div slot="footer">Footer</div>
    </ProposalCard>

    <!-- Input Search -->
    <InputSearch v-model="searchText" @input="handleSearchInput">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.74994 7.25C2.74994 4.76472 4.76466 2.75 7.24994 2.75C9.73522 2.75 11.7499 4.76472 11.7499 7.25C11.7499 9.73528 9.73522 11.75 7.24994 11.75C4.76466 11.75 2.74994 9.73528 2.74994 7.25ZM7.24994 1.25C3.93623 1.25 1.24994 3.93629 1.24994 7.25C1.24994 10.5637 3.93623 13.25 7.24994 13.25C8.63635 13.25 9.91293 12.7798 10.9289 11.9901L13.4692 14.5304C13.7621 14.8233 14.237 14.8233 14.5299 14.5304C14.8228 14.2375 14.8228 13.7627 14.5299 13.4698L11.9896 10.9295C12.7795 9.91345 13.2499 8.63666 13.2499 7.25C13.2499 3.93629 10.5636 1.25 7.24994 1.25Z"
          fill="#686868"
        />
      </svg>
    </InputSearch>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { useChainData } from "@/composables/useChainData";
import * as Utility from "@/utility/index";

const { getAllVotes, getAllVotesAsync } = useChainData();

const props = defineProps<{ proposalId: number; isValidatorsOnly?: boolean }>();
const offset = ref<number>(1);
const limit = ref<number>(10);
const votes = ref();

function next() {
  offset.value += limit.value;
}

function prev() {
  offset.value = offset.value <= limit.value ? 0 : offset.value - limit.value;
}

async function updateVoteList() {
  try {
    console.log(props.proposalId);
    console.log(limit.value);
    console.log(offset.value);
    votes.value = getAllVotes(props.proposalId, limit.value, 0).value;
  } catch (err) {
    console.error(err);
  }
}

const filteredVotes = computed(() => {
  return votes.value;
});

onMounted(() => {
  updateVoteList();

  setInterval(async () => {
    const res = await getAllVotesAsync(0, 10, 0);
    console.log(res);
  }, 1000);
});
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="grid grid-cols-4 py-4 w-full text-grey-100 font-medium text-200">
      <span>Voter</span>
      <span>TX Hash</span>
      <span>Answer</span>
      <span class="text-right">Time</span>
    </div>
    <div class="grid grid-cols-4 py-4 w-full text-200 text-grey-50" v-for="index in 10" :key="index">
      <span>GovGen...</span>
      <span>wwwwwwwwww</span>
      <span>yes</span>
      <span class="text-right">{{ Utility.formatHuman(new Date(Date.now())) }}</span>
    </div>
    {{ filteredVotes }}
    <div class="flex flex-row justify-end pt-12 gap-4">
      <Icon icon="Arrowleftend" class="text-400 hover:opacity-75 cursor-pointer" />
      <Icon icon="Arrowleft" class="text-400 hover:opacity-75 cursor-pointer" />
      <!-- Page Numbers -->
      <Icon icon="Arrowright" class="text-400 hover:opacity-75 cursor-pointer" />
      <Icon icon="Arrowrightend" class="text-400 hover:opacity-75 cursor-pointer" />
    </div>
  </div>
</template>

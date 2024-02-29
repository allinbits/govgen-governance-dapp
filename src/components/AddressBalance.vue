<script lang="ts" setup>
import { useChainData } from "../composables/useChainData";
const props = defineProps<{
  address: string;
}>();
const { getBalance, getProposals } = useChainData();
const balance = getBalance(props.address);
const proposals = getProposals();
</script>

<template>
  <div class="flex mt-24 justify-center fixed top-0 w-full">
    {{ balance }}
    {{ proposals }}
  </div>
</template>

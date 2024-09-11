<script setup lang="ts">
import { useChainData } from "@/composables/useChainData";
import { formatAmount } from "@/utility";
import { computed } from "vue";

const { address, denom } = defineProps<{ address: string; denom: string }>();
const { getBalance } = useChainData();

const balances = getBalance(address);

const balance = computed(() => {
  let bal = balances.value?.action_account_balances[0].coins?.filter((x) => x.denom == denom)[0];
  if (bal) {
    return bal;
  } else {
    return {
      amount: "0",
      denom,
    };
  }
});
</script>
<template>
  <span>{{ formatAmount(balance.amount, 6) }}</span>
</template>

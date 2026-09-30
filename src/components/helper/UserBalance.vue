<script setup lang="ts">
import { formatAmount } from "@/utility";

const { denom } = defineProps<{ address: string; denom: string }>();
const balance = { amount: "0", denom };
</script>
<template>
  <span>{{ formatAmount(balance.amount, 6) }}</span>
</template>

<script setup lang="ts">
import apolloClient from "@/apolloClient";
import { bus } from "@/bus";
import { useChainData } from "@/composables/useChainData";
import { totalAmounts } from "@/utility";
import { Coin } from "@cosmjs/proto-signing";
import { provideApolloClient } from "@vue/apollo-composable";
import { ref, watch } from "vue";
const { timestamp, address } = defineProps<{ timestamp: string; address: string }>();
const { getDelegatedAsync, getBlockHeight } = useChainData();

const height = getBlockHeight(timestamp);
const delegated = ref<Coin[] | null>(null);
watch(height, async (newHeight, oldHeight) => {
  if (newHeight && newHeight.block[0].height != oldHeight?.block[0].height) {
    provideApolloClient(apolloClient);
    try {
      const dq = await getDelegatedAsync(address, newHeight.block[0].height);
      if (dq) {
        delegated.value = dq.action_delegation_total?.coins as Coin[];
      } else {
        delegated.value = [];
      }
    } catch (e) {
      bus.emit("error");
    }
  }
});

</script>
<template>
  <span>{{ totalAmounts(delegated ?? []) }}</span>
</template>

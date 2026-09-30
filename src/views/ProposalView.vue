<script setup lang="ts">
import ProposalWrapper from "@/components/proposals/ProposalWrapper.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getStaticProposal } from "@/data/proposals";

const route = useRoute();
const proposal = computed(() => {
  const value = getStaticProposal(parseInt(route.params.id as string));
  return value ? { proposal: [value] } : undefined;
});
const height = 0;
</script>

<template>
  <div>
    <ProposalWrapper
      v-if="proposal?.proposal[0].id && height !== null"
      :proposal-id="parseInt(route.params.id as string)"
      :height="height"
    />
    <div v-else class="text-400 text-grey-50 text-center mt-12 font-medium">
      {{ $t("proposalview.labels.unavailable") }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { Chart, registerables } from "chart.js";

import { createTypedChart } from "vue-chartjs";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";

Chart.register(...registerables, TreemapElement);

type TokenInfo = { name: string; value: number };

const ColorMap = {
  Yes: "#8eeefe",
  No: "#f08c8d",
  Veto: "#ecb0fe",
  Abstain: "#686868",
};

const props = defineProps<{
  data: TokenInfo[];
  type: keyof typeof ColorMap;
}>();

const TreeMap = createTypedChart("treemap", TreemapController);

const dataset = computed(() => {
  return {
    datasets: [
      {
        data: [],
        label: props.type ?? "Unknown",
        key: "value",
        tree: props.data,
        labels: { display: true },
        groups: ["name"],
        spacing: 6,
        captions: {
          display: true,
        },
        borderRadius: 12,
        backgroundColor: ColorMap[props.type],
      },
    ],
  };
});
</script>
<template>
  <TreeMap :data="dataset" :options="{ plugins: { legend: { display: false } } }" />
</template>

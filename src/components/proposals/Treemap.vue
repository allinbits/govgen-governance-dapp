<script lang="ts" setup>
import { Chart, registerables } from "chart.js";

import { createTypedChart } from "vue-chartjs";
import { TreemapController, TreemapElement } from "chartjs-chart-treemap";

Chart.register(...registerables, TreemapElement);

const TreeMap = createTypedChart("treemap", TreemapController);
const dataset = {
  datasets: [
    {
      label: "My treemap dataset",
      tree: [15, 6, 6, 5, 4, 3, 2, 2],
      borderColor: "green",
      borderWidth: 1,
      spacing: 0,
    },
  ],
};
</script>
<template>
  <TreeMap :data="dataset" />
</template>

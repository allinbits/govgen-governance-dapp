<script lang="ts" setup>
import { computed } from "vue";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";

const props = defineProps<{ yes: number; no: number; veto: number; abstain: number }>();

const ColorMap = {
  yes: "#8eeefe",
  no: "#f08c8d",
  veto: "#ecb0fe",
  abstain: "#686868",
};

const chartData = computed(() => {
  return {
    datasets: [{ data: [props.yes, props.no, props.veto, props.abstain], backgroundColor: Object.values(ColorMap) }],
  };
});

ChartJS.register(ArcElement, Tooltip, Legend);
</script>

<template>
  <Doughnut :data="chartData" :options="{ cutout: '75%', borderColor: 'transparent', spacing: 6 }" />
</template>

<script setup lang="ts">
import { useChainData } from "@/composables/useChainData";
import { computed } from "vue";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const props = defineProps<{
  proposalId: number;
}>();

const { getProposalTallyProgress } = useChainData();
const tallies = getProposalTallyProgress(props.proposalId);

const data = computed(() => {
  return {
    labels: tallies.value?.proposal_tally_result.map((x) => "" + x.height),
    datasets: [
      {
        label: "YES",
        backgroundColor: "#8eeefeBB",
        borderColor: "#8eeefe",
        fill: true,
        data: tallies.value?.proposal_tally_result.map((x) => x.yes),
      },
      {
        label: "NO",
        backgroundColor: "#f08c8dBB",
        borderColor: "#f08c8d",
        fill: true,
        data: tallies.value?.proposal_tally_result.map((x) => x.no),
      },
      {
        label: "VETO",
        backgroundColor: "#ecb0feBB",
        borderColor: "#ecb0fe",
        fill: true,
        data: tallies.value?.proposal_tally_result.map((x) => x.no_with_veto),
      },
      {
        label: "ABSTAIN",
        backgroundColor: "#686868BB",
        borderColor: "#686868",
        fill: true,
        data: tallies.value?.proposal_tally_result.map((x) => x.abstain),
      },
    ],
  };
});
const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Height",
      },
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: "Voting Power",
      },
    },
  },
};
</script>

<template>
  <div class="w-full responsive h-96">
    <Line :data="data" :options="options" />
  </div>
</template>

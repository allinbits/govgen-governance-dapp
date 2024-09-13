import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import CreateProposalView from "@/views/CreateProposalView.vue";
import ProposalView from "@/views/ProposalView.vue";
import HistoryView from "@/views/HistoryView.vue";
import { useTelemetry } from "@/composables/useTelemetry";
import TermsView from "@/views/TermsView.vue";
import PrivacyView from "@/views/PrivacyView.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: HomeView },
  { path: "/terms", component: TermsView },
  { path: "/privacy", component: PrivacyView },
  { path: "/proposals/:id", component: ProposalView },
  { path: "/history", component: HistoryView },
  // { path: "/design", component: DesignView },
];
if (import.meta.env.VITE_CHAIN_ID != "govgen-1") {
  routes.push({ path: "/create", component: CreateProposalView });
}
const router = createRouter({
  history: routerHistory,
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 600);
    });
  },
});

const { logPageviews } = useTelemetry();
logPageviews();

export default router;

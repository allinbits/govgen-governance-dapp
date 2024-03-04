import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CreateProposalView from "../views/CreateProposalView.vue";
import ProposalsView from "../views/ProposalsView.vue";
import ProposalView from "../views/ProposalView.vue";
import TemplatesView from "../views/Templates.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: HomeView },
  { path: "/proposals", component: ProposalsView },
  { path: "/create", component: CreateProposalView },
  { path: "/proposals/:id", component: ProposalView },
  { path: "/templates", component: TemplatesView },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;

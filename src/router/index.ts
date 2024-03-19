import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import CreateProposalView from "../views/CreateProposalView.vue";
import ProposalView from "../views/ProposalView.vue";
import DepositProposalView from "../views/DepositProposalView.vue";
// import DesignView from "../views/Design.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: HomeView },
  { path: "/create", component: CreateProposalView },
  { path: "/proposals/:id", component: ProposalView },
  { path: "/deposit/:id", component: DepositProposalView },
  // { path: "/design", component: DesignView },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;

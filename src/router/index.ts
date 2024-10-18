import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
const routerHistory = createWebHistory();
const routes = [{ path: "/", component: HomeView }];
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

export default router;

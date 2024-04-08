import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "@/style.css";
import App from "@/App.vue";
import router from "@/router";
import IconVue from "@/components/ui/Icon.vue";
import { createI18n } from "vue-i18n";
import { messages } from "@/localization";
import apolloClient from "./apolloClient";
import { createPlausible } from "v-plausible/vue";

const plausible = createPlausible({
  init: {
    domain: "https://govgen-governance-dapp.netlify.app",
    trackLocalhost: true,
  },
  settings: {
    enableAutoOutboundTracking: true,
    enableAutoPageviews: true,
  },
  partytown: false,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
app.use(i18n);
app.use(router);
app.use(plausible);
app.component("Icon", IconVue);
router.isReady().then(() => app.mount("#app"));

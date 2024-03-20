import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
import IconVue from "./components/ui/Icon.vue";
import { createI18n } from "vue-i18n";
import { messages } from "./localization";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT ?? "https://graphql.devnet.govgen.dev/v1/graphql",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
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
app.component("Icon", IconVue);
router.isReady().then(() => app.mount("#app"));

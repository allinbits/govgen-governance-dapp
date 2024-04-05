// playwright/index.ts
import { beforeMount } from '@playwright/experimental-ct-vue/hooks';
import IconVue from "../src/components/ui/Icon.vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "../src/style.css";
import { createI18n } from "vue-i18n";
import { messages } from "../src/localization";
import apolloClient from "../src/apolloClient";

beforeMount(async ({ app }) => {
app.provide(DefaultApolloClient, apolloClient);
const i18n = createI18n({
    legacy: false,
    locale: "en",
    fallbackLocale: "en",
    messages,
  });
  app.use(i18n);
  app.component("Icon", IconVue);
});
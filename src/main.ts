import { createApp } from "vue";
import "@/style.css";
import App from "./App.vue";
import router from "@/router";
import IconVue from "@/components/ui/Icon.vue";
import { createI18n } from "vue-i18n";
import { messages } from "@/localization";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);
const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});
app.use(i18n);
app.use(router);
app.use(VueQueryPlugin);
app.component("Icon", IconVue);
router.isReady().then(() => app.mount("#app"));

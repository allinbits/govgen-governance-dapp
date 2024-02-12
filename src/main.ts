import { createApp } from "vue";
import Giscus from "@giscus/vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import MainNavComponent from "./components/MainNav.vue";
import WalletSelectorComponent from "./components/WalletSelector.vue";

const app = createApp(App);
app.use(router);
app.component("MainNav", MainNavComponent);
app.component("WalletSelector", WalletSelectorComponent);
app.component("GiscusWidget", Giscus);
app.mount("#app");
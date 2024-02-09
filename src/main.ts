import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Giscus from "@giscus/vue";

const app = createApp(App);
app.use(router);
app.component("GiscusWidget", Giscus);
app.mount("#app");

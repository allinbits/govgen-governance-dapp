import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Giscus from "@giscus/vue";
import GiscusCommentsComponent from "./components/GiscusComments.vue";

const app = createApp(App);
app.use(router);
app.component("GiscusWidget", Giscus);
app.component("GiscusComments", GiscusCommentsComponent);
app.mount("#app");

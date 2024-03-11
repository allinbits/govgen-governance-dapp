import { createApp } from "vue";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import IconVue from "./components/ui/Icon.vue";

const app = createApp(App);
app.use(router);
app.component("Icon", IconVue);
router.isReady().then(() => app.mount("#app"));

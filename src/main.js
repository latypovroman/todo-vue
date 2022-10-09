import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import router from "./router.js";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");

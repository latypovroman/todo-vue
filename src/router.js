import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: App,
    name: "App",
    meta: { title: "Список дел" },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

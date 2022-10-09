import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import TodoPage from "./views/TodoPage.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: { title: "Список дел" },
  },
  {
    path: "/:id",
    component: TodoPage,
    name: "TodoPage",
    meta: { title: "Список дел" },
    props: { default: true, title: "" },
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

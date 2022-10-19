import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import Home from "./views/Home.vue";
import TodoPage from "./views/TodoPage.vue";
import Login from "./views/Login.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: { title: "Список дел" },
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: { title: "Страница логина" },
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

router.beforeEach(function (to, from, next) {
  document.title = to.meta.title || "TODO VUE APP";

  if (!store.state.user.token && to.name !== "Login") {
    next({ name: "Login" });
    return
  }

  if (store.getters["user/getToken"] && to.name === "Login") {
    next({ name: "Home" });
    return
  }

  next();
});

export default router;

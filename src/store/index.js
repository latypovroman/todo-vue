import { createStore } from "vuex";
import { todolist } from "./todolist.js";
import { user } from "./user";

export default createStore({
  modules: {
    todolist,
    user,
  },
});

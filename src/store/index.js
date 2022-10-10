import { createStore } from "vuex";
import { todolist } from "./todolist.js";

export default createStore({
  modules: {
    todolist,
  },
});

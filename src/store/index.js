import { createStore } from "vuex";
import { todolist } from "./todolist.js";
import { user } from "./user";
import axios from "axios";
import { popup } from "./popup";

const store = createStore({
  modules: {
    todolist,
    user,
    popup
  },
});

export const axiosInstance = axios.create({
  baseURL: "http://demo.telminov.ru:8082/",
  headers: {'Authorization': `Token ${localStorage.getItem('jwt')}`}
});

export default store;
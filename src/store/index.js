import { createStore } from "vuex";
import { todolist } from "./todolist.js";
import { user } from "./user";
import { popup } from "./popup";
import { sort } from "./sort";
import axios from "axios";

const store = createStore({
  modules: {
    todolist,
    user,
    popup,
    sort
  },
});

export const axiosInstance = axios.create({
  baseURL: "http://demo.telminov.ru:8082/",
  headers: {'Authorization': `Token ${localStorage.getItem('jwt')}`}
});

export default store;
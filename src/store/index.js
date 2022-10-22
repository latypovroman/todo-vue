import { createStore } from "vuex";
import { todolist } from "./todolist.js";
import { user } from "./user";
import { popup } from "./popup";
import { sort } from "./sort";
import { speech } from "./speech";
import axios from "axios";


const store = createStore({
  modules: {
    todolist,
    user,
    popup,
    sort,
    speech
  },
});

export const axiosInstance = axios.create({ baseURL: 'http://demo.telminov.ru:8082/' });
const axiosInstanceInterceptor = axiosInstance.interceptors.request.use((config) => {
      config.headers.Authorization = `Token ${localStorage.getItem('jwt')}`
      return config
    }
)

export default store;
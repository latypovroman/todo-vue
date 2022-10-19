import { axiosInstance } from "../store";
import router from "../router";
import login from "../views/Login.vue";

export const user = {
  state: () => ({
    token: undefined,
    username: '',
  }),
  getters: {
    getToken(state) {
      const storedToken = localStorage.getItem("jwt");
      const storedUsername = localStorage.getItem('username');
      if (!state.token && storedToken) {
        state.token = storedToken;
        state.username = storedUsername;
      }
      return storedToken;
    }
  },
  mutations: {
    getData(state, { string, username }) {
      state.token = string;
      state.username = username;
      console.log(state.username)
    },
    logout(state) {
      state.token = undefined;
      state.username = '';
      localStorage.removeItem("jwt");
      router.push("/login");
    },
  },
  actions: {
    async login(context, { username, password }) {
      try {
        const response = await axiosInstance.post("user/login/", {
          username,
          password,
        });
        const token = response.data.token;
        if (token) {
          context.commit("getData", { token, username });
          localStorage.setItem('username', username);
          localStorage.setItem("jwt", token);
          await router.push("/");
        }
      } catch (err) {
        alert(err);
      }
    },
  },
  namespaced: true,
};

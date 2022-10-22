import { axiosInstance } from "./index";
import router from "../router";


export const user = {
  state: () => ({
    token: '',
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
    getData(state, { token, username }) {
      state.token = token;
      state.username = username;
    },
    logout(state) {
      state.token = undefined;
      state.username = '';
      localStorage.removeItem("jwt");
      localStorage.removeItem("username");
      router.push("/login");
    },
  },
  actions: {
    async login(context, { username, password }) {
      try {
        const response = await axiosInstance.post(
            "/user/login/",
            {
                    username,
                    password,
                  });

        const token = response.data.token;

        if (token) {
          context.commit("getData", { token, username });
          localStorage.setItem('username', username);
          localStorage.setItem("jwt", token);
        }
      } catch (err) {
        alert(err);
      }
      await router.push('/');
    },
    async register(context, {username, password}) {
      try {
        const response = await axiosInstance.post("/user/register/", {
          username,
          password,
        });
        const token = response.data.token;

        if (token) {
          await context.dispatch("login", { username, password })
        }
      } catch (err) {
        alert(err);
      }
    },
  },
  namespaced: true,
};

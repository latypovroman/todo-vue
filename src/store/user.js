import {axiosInstance} from "../store";
import router from "../router";

export const user = {
  state: () => ({
    token: undefined,
  }),
  getters: {
    getToken(state) {
      const storedToken = localStorage.getItem("jwt");
      if (!state.token && storedToken) {
        state.token = storedToken;
      }
      return storedToken;
    }
  },
  mutations: {
    getToken(state, string) {
      state.token = string;
    },
    logout(state) {
      state.token = undefined;
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
          context.commit("getToken", token);
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

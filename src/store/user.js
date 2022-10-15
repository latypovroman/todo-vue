import axiosInstance from "../assets/axios";
import router from "../router";

export const user = {
  state: () => ({
    token: undefined,
  }),
  mutations: {
    getToken(state, string) {
      state.token = string;
    },
  },
  actions: {
    async login(context, { username, password }) {
      console.log(username, password);
      const response = await axiosInstance.post("user/login/", {
        username,
        password,
      });

      console.log(response.data.token);
      if (response.data.token) {
        context.commit("getToken", response.data.token);
        await router.push("/");
      }
    },
  },
  namespaced: true,
};
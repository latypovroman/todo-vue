import axios from "axios";

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
      const response = await axios.post(
        "http://demo.telminov.ru:8082/user/login/",
        {
          username: "user",
          password: "12345678",
        }
      );
      context.commit("getToken", response.data.token);
    },
  },
  namespaced: true,
};

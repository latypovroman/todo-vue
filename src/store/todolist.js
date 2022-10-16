import axiosInstance from "../assets/axios";

export const todolist = {
  state: () => ({
    todos: [],
  }),
  mutations: {
    getTodos(state, array) {
      state.todos = array;
    },
    deleteTodo(state, id) {
      id = typeof id === "number" ? id : Number(id);
      state.todos = state.todos.filter((todo) => todo.id !== Number(id));
    },
    addTodo(state, text) {
      state.todos.push({ id: state.todos.length + 1, title: text });
    },
    switchCompletion(state, id) {
      console.log(state.todos[id - 1]);
      state.todos[id - 1].isComplete = !state.todos[id - 1].isComplete;
    },
  },
  actions: {
    async fetchTodos(context) {
      const response = await axiosInstance.get("/items/", {
        headers: {
          Authorization: `Token ${context.rootState.user.token}`,
        },
      });
      console.log(response.data);
      context.commit("getTodos", response.data);
    },
  },
  namespaced: true,
};

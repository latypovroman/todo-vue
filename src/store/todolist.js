import { axiosInstance } from "../store";

export const todolist = {
  state: () => ({
    todos: [],
  }),
  mutations: {
    getTodos(state, array) {
      state.todos = array;
    },
    hideTodo(state, id) {
      id = typeof id === "number" ? id : Number(id);
      state.todos = state.todos.filter((todo) => todo.id !== Number(id));
    },
    addTodo(state, {name, description}) {
      state.todos.push({ id: state.todos.length + 1, name, description });
    },
    switchCompletion(state, todo) {
      todo.done = !todo.done;
    },
    editText(state, {id, name, description}) {
      const todo = state.todos.find(todo => todo.id === id);
      todo.name = name;
      todo.description = description;
    }
  },
  actions: {
    async fetchTodos(context) {
      const response = await axiosInstance.get("/items/");
      context.commit("getTodos", response.data);
    },
    async postTodo(context, { name, description }) {
      await axiosInstance.post("/items/", {name, description});
      context.commit("addTodo", {name, description});
    },
    async deleteTodo(context, id) {
      await axiosInstance.delete(`/items/${id}/`);
      context.commit("hideTodo", id);
    },
    async changeCompletion({ commit, state }, id) {
      const todo = state.todos.find(todo => todo.id === id);
      todo.done
          ? await axiosInstance.patch(`/items/${id}/unset_done/`)
          : await axiosInstance.patch(`/items/${id}/set_done/`);
      commit("switchCompletion", todo)
    },
    async editTodo(context, { name, description, id }) {
      await axiosInstance.patch(`/items/${id}/`, { name, description });
      context.commit("editText", { id, name, description});
    }
  },
  namespaced: true,
};

import { axiosInstance } from "./index";

export const todolist = {
  state: () => ({
    todos: [],
    isLoading: false,
  }),
  mutations: {
    getTodos(state, array) {
      state.todos = array;
    },
    hideTodo(state, id) {
      id = typeof id === "number" ? id : Number(id);
      state.todos = state.todos.filter((todo) => todo.id !== Number(id));
    },
    addTodo(state, {name, description, id}) {
      state.todos.push({ id, name, description });
    },
    switchCompletion(state, todo) {
      todo.done = !todo.done;
    },
    editText(state, {id, name, description}) {
      const todo = state.todos.find(todo => todo.id === id);
      todo.name = name;
      todo.description = description;
    },
    setLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    }
  },
  actions: {
    async fetchTodos(context) {
      try {
        const response = await axiosInstance.get("/items/");
        context.commit("getTodos", response.data);
      } catch (err) {
        alert(err);
      } finally {
        context.commit("stopLoading");
      }
    },
    async postTodo(context, { name, description }) {
      const response = await axiosInstance.post("/items/", {name, description});
      console.log(response);
      context.commit("addTodo", {name, description, id: response.data.id});
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

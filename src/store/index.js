import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [
      { id: 1, title: "Посмотреть лекции" },
      { id: 2, title: "Разобраться с vue" },
      { id: 3, title: "Запилить приложение" },
    ],
  },
  getters: {},
  mutations: {
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== Number(id));
      console.log(id);
    },
    addTTodo(state, text) {
      state.todos.push({ id: state.todos.length + 1, title: text });
    },
  },
  actions: {},
  modules: {},
});

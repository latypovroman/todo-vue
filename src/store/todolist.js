export const todolist = {
  state: () => ({
    todos: [
      { id: 1, title: "Посмотреть лекции" },
      { id: 2, title: "Разобраться с vue" },
      { id: 3, title: "Запилить приложение" },
    ],
  }),
  mutations: {
    deleteTodo(state, id) {
      id = typeof id === "number" ? id : Number(id);
      state.todos = state.todos.filter((todo) => todo.id !== Number(id));
    },
    addTodo(state, text) {
      state.todos.push({ id: state.todos.length + 1, title: text });
    },
  },
  namespaced: true,
};

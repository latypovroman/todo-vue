export const todolist = {
  state: () => ({
    todos: [
      { id: 1, title: "Посмотреть лекции", isComplete: false },
      { id: 2, title: "Разобраться с vue", isComplete: false },
      { id: 3, title: "Запилить приложение", isComplete: false },
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
    switchCompletion(state, id) {
      console.log(state.todos[id - 1]);
      state.todos[id - 1].isComplete = !state.todos[id - 1].isComplete;
    },
  },
  namespaced: true,
};

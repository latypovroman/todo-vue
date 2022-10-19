export const popup = {
    state: () => ({
        editTodo: {
            isOpened: false,
            name: '',
            description: '',
            id: null
        },
    }),
    mutations: {
        openEditPopup(state, { name, description, id }) {
            state.editTodo.isOpened = true;
            state.editTodo.name = name;
            state.editTodo.description = description;
            state.editTodo.id = id;
        },
        close(state) {
            state.editTodo.isOpened = false;
            state.editTodo.name = '';
            state.editTodo.description = '';
            state.editTodo.id = null;
        }
    },
    actions: {},
    namespaced: true,
};
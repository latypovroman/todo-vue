export const sort = {
    state: {
        selectedSort: undefined,
        searchFilter: ''
    },
    mutations: {
        changeSort(state, value) {
            state.selectedSort = value;
        },
        changeSearchFilter(state, string) {
            state.searchFilter = string;
        }
    },
    actions: {},
    namespaced: true,
};
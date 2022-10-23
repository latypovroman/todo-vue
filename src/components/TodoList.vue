<template>
  <Sort v-if="storedTodos.length > 0"/>
  <h2 v-if="storedTodos.length === 0">Нажмите "Добавить" для новой задачи</h2>
  <ul>
    <TodoItem
        v-for="(item, index) in sortedAndFilteredTodos"
        :key="item.id"
        :item="item"
        :count="index + 1"
    />
  </ul>
  <AddForm/>
  <EditPopup />
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddForm from "./AddForm.vue";
import EditPopup from "./EditPopup.vue";
import Sort from "./Sort.vue";

export default {
  name: "TodoList",
  components: { AddForm, TodoItem, EditPopup, Sort },
  computed: {
    storedTodos() {
      return this.$store.state.todolist.todos;
    },
    selectedSort() {
      return this.$store.state.sort.selectedSort;
    },
    searchFilter() {
      return this.$store.state.sort.searchFilter;
    },
    sortByLocaleCompare() {
      return [...this.storedTodos].sort((todo1, todo2) => {
        return todo1[this.selectedSort].localeCompare(todo2[this.selectedSort])
      })
    },
    sortById() {
      return [...this.storedTodos].sort((todo1, todo2) => {
        return todo1.id - todo2.id;
      })
    },
    sortedTodos() {
      if (this.selectedSort) {
        return this.selectedSort === 'date'
        ? this.sortById
        : this.sortByLocaleCompare;
      }
      return this.storedTodos;
    },
    sortedAndFilteredTodos() {
      if (this.searchFilter) {
        return this.sortedTodos.filter(todo => {
          const name = todo.name.toLowerCase();
          const searchText = this.searchFilter.toLowerCase();
          return name.includes(searchText);
        })
      }
      return this.sortedTodos;
    },
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.el-row {
  justify-content: center;
}
</style>
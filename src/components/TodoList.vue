<template>
  <h2 v-if="$store.state.todolist.todos.length === 0">Нажмите "Добавить" для новой задачи</h2>
  <ul>
    <TodoItem
        v-for="(item, index) in $store.state.todolist.todos"
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

export default {
  name: "TodoList",
  components: {AddForm, TodoItem, EditPopup},
  data() {
    return {
      popup: {
        isOpened: false,
        name: '',
        description: ''
      },
      editPopupOpened: false,
    }
  },
  mounted() {
    this.$store.dispatch("todolist/fetchTodos");
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
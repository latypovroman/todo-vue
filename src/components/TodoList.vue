<template>
  <ul>
    <TodoItem
        v-for="item in $store.state.todolist.todos"
        :key="item.id"
        :item="item"
    />
  </ul>
  <AddForm/>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddForm from "./AddForm.vue";

export default {
  name: "TodoList",
  components: {AddForm, TodoItem},
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
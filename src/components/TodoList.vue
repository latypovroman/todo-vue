<template>
  <ol>
    <TodoItem
        v-for="item in this.$store.state.todos"
        :key="item.id"
        :item="item"
    />
  </ol>
  <AddForm :todos="todos"/>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddForm from "./AddForm.vue";

export default {
  name: "TodoList",
  components: {AddForm, TodoItem},
  // data() {
  //   return {
  //     todos: [
  //       { id: 1, title: "Посмотреть лекции" },
  //       { id: 2, title: "Разобраться с vue" },
  //       { id: 3, title: "Запилить приложение" }
  //     ]
  //   }
  // },
}
</script>

<style scoped>

</style>
<template>
  <ol>
    <TodoItem
        v-for="item in todo"
        :key="item.id"
        :item="item"
    />
  </ol>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {TodoItem},
  data() {
    return {
      todo: [
        { id: 1, title: "Посмотреть лекции" },
        { id: 2, title: "Разобраться с vue" },
        { id: 3, title: "Запилить приложение" }
      ]
    }
  }
}
</script>

<style scoped>

</style>
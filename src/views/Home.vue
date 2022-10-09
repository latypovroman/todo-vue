<template>
  <h1 class="header">Список дел</h1>
  <TodoList />
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  name: "Home",
  components: {TodoList}
}
</script>

<style scoped>

</style>
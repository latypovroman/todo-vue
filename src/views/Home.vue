<template>
  <TodoList v-if="!$store.state.todolist.isLoading"/>
  <el-icon v-else class="is-loading"><Orange /></el-icon>
</template>

<script>
import TodoList from "../components/TodoList.vue";
export default {
  name: "Home",
  components: {TodoList},
  mounted() {
    this.$store.commit("todolist/setLoading");
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      this.$store.dispatch("todolist/fetchTodos");
    }
  }
}
</script>

<style scoped>
.el-icon {
  margin: 30px auto;
  display: block;
}
</style>
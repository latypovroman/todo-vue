<template>
  <div>
    <h2>Задача номер {{$route.params.id}}</h2>
    <p>{{openedTodo.name}}</p>
    <el-button @click="$router.push('/')">Вернуться</el-button>
    <el-button @click="onDeleteClick" type="danger">Удалить задачу</el-button>
  </div>
</template>

<script>

export default {


  name: "TodoPage",
  methods: {
    onDeleteClick(evt) {
      evt.preventDefault();
      this.$store.dispatch('todolist/deleteTodo', this.openedTodo.id);
      this.$router.push('/');
    }
  },
  computed: {
    openedTodo() {
      return this.$store.state.todolist.todos[this.$route.params.id - 1]
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
  color: chocolate;
}
</style>
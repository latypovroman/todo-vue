<template>
  <div>
    <p style="font-size: 14px">Задача номер {{todoIndex}}</p>
    <h2>{{openedTodo.name}}</h2>
    <p v-if="openedTodo.description">{{openedTodo.description}}</p>
    <p v-else style="color:grey">У этой задачи пока нет описания</p>
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
      return this.$store.state.todolist.todos.find(todo => todo.id === Number(this.$route.params.id))
    },
    todoIndex() {
      const index = this.$store.state.todolist.todos.findIndex(todo => todo.id === Number(this.$route.params.id))
      return index + 1;
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
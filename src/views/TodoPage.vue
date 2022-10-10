<template>
  <div>
    <h2>Задача номер {{$store.state.todolist.todos[$route.params.id - 1].id}}</h2>
    <p>{{$store.state.todolist.todos[$route.params.id - 1].title}}</p>
    <button @click="$router.push('/')">Вернуться</button>
    <button @click="onDeleteClick">Удалить задачу</button>
  </div>
</template>

<script>

export default {


  name: "TodoPage",
  methods: {
    onDeleteClick(evt) {
      evt.preventDefault();
      this.$store.commit('todolist/deleteTodo', this.$route.params.id);
      this.$router.push('/');
    }
  },
}
</script>

<style scoped>
p {
  font-size: 20px;
  color: chocolate;
}
</style>
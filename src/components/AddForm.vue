<template>
  <form>
    <input v-model="text">
    <button type="submit" @click="addTodo">Добавить</button>
  </form>
</template>

<script>
export default {
  name: "AddForm",
  props: {
    todos: Array,
  },
  methods: {
    addTodo(evt) {
      evt.preventDefault();
      this.todos.push({ id: this.todos.length + 1, title: this.text})
      this.text = '';
    }
  },
  data() {
    return {
      text: '',
    }
  },
}

</script>

<style scoped>

</style>
<template>
  <form>
    <input v-model="text" placeholder="Новая задача" type="text" minlength="5">
    <button type="submit" @click="onSubmit">Добавить</button>
  </form>
</template>

<script>

export default {
  name: "AddForm",
  props: {
    todos: Array,
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.$store)
      this.$store.commit("todolist/addTodo", this.text)
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
<template>
  <form>
    <el-row>
      <el-col :span="10">
        <el-input v-model="text" placeholder="Новая задача" type="text" minlength="5"/>
      </el-col>
      <el-col :span="5">
        <el-button type="submit" @click="onSubmit">Добавить</el-button>
      </el-col>
    </el-row>
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
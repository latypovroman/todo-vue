<template>
  <el-form
      :model="formData"
      style="width: 400px; margin-top: 30px"
      @keyup.enter="onSubmit"
      ref="addForm"
      :rules="rules"
  >
    <el-form-item
        prop="task"
    >
      <el-input
          v-model="formData.text"
          placeholder="Новая задача"
          autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button
          type="primary"
          plain
          @click="onSubmit"
      >
        Добавить
      </el-button>
    </el-form-item>
  </el-form>

</template>

<script>

export default {
  name: "AddForm",
  methods: {
    async onSubmit(evt) {
      console.log(this.$refs.addForm.validate())
      evt.preventDefault();
      const isValid = await this.$refs.addForm.validate();
      if (isValid) {
        await this.$store.dispatch("todolist/postTodo", this.formData.text);
        this.formData.text = '';
      }
    }
  },
  data() {
    return {
      formData: { text: ''},
      rules: {task: [{min: 5, message: 'Минимальная длина - 5 знаков'}]}
    }
  },
}

</script>

<style scoped>

</style>
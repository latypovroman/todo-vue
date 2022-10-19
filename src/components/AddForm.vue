<template>
  <el-form
      :model="formData"
      style="width: 400px; margin-top: 30px"
      @keyup.enter="onSubmit"
      ref="addForm"
  >
    <el-form-item
        prop="task"
    >
      <el-input
          v-model="formData.name"
          placeholder="Новая задача"
          autocomplete="off"
      />
    </el-form-item>
    <el-form-item
        prop="description"
    >
      <el-input
          v-model="formData.description"
          type="textarea"
          placeholder="Описание задачи (опционально)"
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
      evt.preventDefault();
      const isValid = await this.$refs.addForm.validate();
      if (isValid) {
        await this.$store.dispatch("todolist/postTodo", {
          name: this.formData.name,
          description: this.formData.description
        });
        this.formData.name = '';
        this.formData.description = '';
      }
    }
  },
  data() {
    return {
      formData: { name: '', description: ''},
    }
  },
}

</script>

<style scoped>

</style>
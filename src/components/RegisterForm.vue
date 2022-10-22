<template>
  <el-form
      :model="formData"
      style="width: 400px"
      @keyup.enter="onSubmit"
      ref="registerForm"
  >
    <el-form-item
        :rules="{required: true, message: 'Обязательное поле'}"
        prop="username"
    >
      <el-input
          v-model="formData.username"
          placeholder="Логин"
          autocomplete="off"
      />
    </el-form-item>
    <el-form-item
        :rules="{required: true, message: 'Обязательное поле'}"
        prop="password"
    >
      <el-input
          v-model="formData.password"
          placeholder="Пароль"
          type="password"
      />
    </el-form-item>
    <el-form-item>
      <el-button
          type="primary"
          plain
          @click="onSubmit"
      >
        Регистрация
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit() {
      const isValid = await this.$refs.registerForm.validate();
      if (!isValid) {
        alert('Данные не прошли валидацию');
        return
      }
      this.$store.dispatch('user/register',
          {username: this.formData.username, password: this.formData.password}
      )
    }
  }
}
</script>

<style scoped>

</style>
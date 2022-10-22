<template>
  <h2>Пожалуйста, зарегистрируйтесь, чтобы использовать Список дел</h2>
  <RegisterForm />
  <router-link class="link" :to="{name: 'Login'}">
      На страницу Логина
  </router-link>
</template>

<script>

import RegisterForm from "../components/RegisterForm.vue";

export default {
  name: "Register",
  components: { RegisterForm },
}
</script>

<style scoped>
h2 {
  font-size: 1em;
}

.link {
  text-decoration: none;
  color: cornflowerblue;
}
</style>
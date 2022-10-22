<template>
  <h2>Пожалуйста, авторизуйтесь!</h2>
  <AuthForm />
  <router-link class="link" :to="{name: 'Register'}">
      На страницу Регистрации
  </router-link>
</template>

<script>
import AuthForm from "../components/AuthForm.vue";

export default {
  name: "Login",
  components: {AuthForm},
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
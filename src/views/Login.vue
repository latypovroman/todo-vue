<template>
<h2>Пожалуйста, авторизуйтесь!</h2>
  <AuthForm />
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
</style>
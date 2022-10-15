<template>
<h2>Пожалуйста, авторизуйтесь!</h2>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    this.$store.dispatch('user/login', {username: 'user', password: '12345678'})
  }
}
</script>

<style scoped>
  h2 {
    font-size: 1em;
  }
</style>
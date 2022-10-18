<template>
  <el-header>
    <h1 class="header">Список дел</h1>
    <el-button @click="onLogoutClick">Выйти</el-button>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    onLogoutClick() {
      this.$store.commit('user/logout');
    }
  }
}
</script>

<style scoped>

</style>
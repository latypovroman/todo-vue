<template>
  <el-header style="margin-bottom: 50px">
    <h1 style="margin-bottom: 15px">Список дел</h1>
    <el-button v-if="$store.state.user.token" @click="onLogoutClick">Выйти</el-button>
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
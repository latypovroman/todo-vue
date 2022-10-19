<template>
  <header>
    <h1 style="margin-bottom: 15px">Список дел</h1>
    <el-container>
      <p v-if="$store.state.user.username">Привет, {{$store.state.user.username}}</p>
      <el-button v-if="$store.state.user.token" @click="onLogoutClick">Выйти</el-button>
    </el-container>
  </header>
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
header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 0 40px 0;
  background-color: #81e4e7;
}
.el-container {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  margin: 0 0 15px 0;
}
h1 {
  margin: 0 0 0 20px;
}
</style>
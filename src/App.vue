<script>
import Header from "./components/Header.vue";
export default {
  components: {Header}
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <Header />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style>

</style>

<script>
import Header from "./components/Header.vue";
export default {
  components: {Header}
}
</script>

<template>
  <div class="common-layout">
      <Header />
      <el-main>
        <router-view></router-view>
      </el-main>
  </div>
</template>

<style>

</style>

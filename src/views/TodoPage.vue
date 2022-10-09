<template>
  <div>
    <h1>Пост номер {{$route.params.id}}</h1>
    <button @click="$router.push('/')">Вернуться</button>
    <button>Удалить задачу</button>
  </div>
</template>

<script>

export default {
  name: "TodoPage",
  created() {
    console.log(this.$route)
  },
}
</script>

<style scoped>

</style>
<template>
  <ul>
    <li v-for="item in todo" :key="item.id">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      todo: [
        { id: 1, title: "Посмотреть лекции" },
        { id: 2, title: "Разобраться с vue" },
        { id: 3, title: "Запилить приложение" }
      ]
    }
  }
}
</script>

<style scoped>

</style>
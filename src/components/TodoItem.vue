<template>
  <li>
    {{item.title}}
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["item"]
}
</script>

<style scoped>

</style>
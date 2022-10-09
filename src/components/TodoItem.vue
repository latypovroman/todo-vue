<template>

  <li>
    <span :class="{completed: isComplete}">{{item.title}}</span>
    <input type="checkbox" @change="isComplete = !isComplete">
  </li>

</template>

<script>

export default {
  name: "TodoItem",
  props: { item: Object },
  data() {
    return {
      isComplete: false
    }
  }
}

</script>

<style scoped>

.completed {
  text-decoration: line-through;
}

</style>
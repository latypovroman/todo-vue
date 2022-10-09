<template>

  <li>
    <router-link :to="{name: 'TodoPage', params: { id: item.id }}">
      <span :class="{completed: isComplete}">{{item.title}}</span>
    </router-link>
    <input type="checkbox" @change="isComplete = !isComplete">
    <button>Удалить задачу</button>
  </li>

</template>

<script>

export default {
  name: "TodoItem",
  props: { item: Object, openItem: Function },
  data() {
    return {
      isComplete: false
    }
  },
}

</script>

<style scoped>

.completed {
  text-decoration: line-through;
}

</style>
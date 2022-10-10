<template>

  <li>
    <router-link :to="{name: 'TodoPage', params: { id: item.id }}">
      <span :class="{completed: isComplete}">{{item.title}}</span>
    </router-link>
    <input type="checkbox" @change="isComplete = !isComplete">
    <button @click="onDeleteClick">Удалить задачу</button>
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
  },
  methods: {
    onDeleteClick(evt) {
      evt.preventDefault();
      this.$store.commit('deleteTodo', this.item.id)
    }
  },
}

</script>

<style scoped>

.completed {
  text-decoration: line-through;
}

</style>
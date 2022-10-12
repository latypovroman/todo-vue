<template>

  <li>
    <el-row gutter="20" align="middle">
      <el-col :span="1">{{ item.id }}</el-col>
      <el-col :span="17">
        <router-link class="link" :to="{name: 'TodoPage', params: { id: item.id }}">
          <el-button :class="{completed: item.isComplete}" class="grid-content ep-bg-purple">
            <span >{{item.title}}</span>
          </el-button>
        </router-link>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-dark" />
        <el-checkbox style="margin-right: 20px" :checked="item.isComplete" size="large" @change="onCompleteClick"/>
        <el-button type="danger" @click="onDeleteClick">Удалить</el-button>
      </el-col>
    </el-row>
  </li>

</template>

<script lang="js" setup>

export default {
  name: "TodoItem",
  props: { item: Object },
  methods: {
    onDeleteClick(evt) {
      evt.preventDefault();
      this.$store.commit('todolist/deleteTodo', this.item.id)
    },
    onCompleteClick() {
      this.$store.commit('todolist/switchCompletion', this.item.id)
    }
  },
}

</script>



<style scoped>

.completed {
  text-decoration: line-through;
  background-color: #abf3ab;
}

.link {
  text-decoration: none;
  color: black;
}

.ep-bg-purple {
  width: 100%
}


</style>


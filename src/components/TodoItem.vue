<template>

  <li>
    <el-row :gutter="20" align="middle">
      <el-col :span="1">{{ count }}</el-col>
      <el-col :span="12">
        <router-link class="link" :to="{name: 'TodoPage', params: { id: item.id }}">
          <el-button :class="{completed: item.done}" class="grid-content ep-bg-purple">
            <span >{{item.name}}</span>
          </el-button>
        </router-link>
        <el-button style="margin-left: 3px" @click="onEditClick" :disabled="item.done">
          <el-icon :size="20"><Edit /></el-icon>
        </el-button>
      </el-col>
      <el-col :span="5"><div class="grid-content ep-bg-purple-dark" />
        <el-checkbox style="margin-right: 20px" :checked="item.done" size="large" @change="onCompleteClick"/>
        <el-button type="danger" @click="onDeleteClick">Удалить</el-button>
      </el-col>
    </el-row>
  </li>

</template>

<script lang="js" setup>

export default {
  name: "TodoItem",
  props: { item: Object, count: Number },
  methods: {
    onDeleteClick(evt) {
      evt.preventDefault();
      this.$store.dispatch('todolist/deleteTodo', this.item.id)
    },
    onCompleteClick() {
      this.$store.dispatch('todolist/changeCompletion', this.item.id)
    },
    onEditClick() {
      this.$store.commit('popup/openEditPopup', this.item);

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
  width: calc(100% - 45px)
}

.el-row {
  justify-content: center;
}

.el-button {
  padding: 10px;
}

</style>


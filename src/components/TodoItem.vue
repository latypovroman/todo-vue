<template>

  <li>
    <el-row align="middle">
      <el-col :span="1">{{ count }}</el-col>
      <el-col :span="16">
        <router-link class="link" :to="{name: 'TodoPage', params: { id: item.id }}">
          <el-button :class="{completed: item.done}" class="grid-content ep-bg-purple">
            <span >{{item.name}}</span>
          </el-button>
        </router-link>
        <el-button @click="onEditClick" :disabled="item.done">
          <el-icon :size="20" ><Edit /></el-icon>
        </el-button>
        <el-button style="padding: 8px" @click="onTTSClick" round>
          <el-icon :size="15"><VideoPlay /></el-icon>
        </el-button>
        <el-checkbox :checked="item.done" size="large" @change="onCompleteClick"/>
        <el-button type="danger" @click="onDeleteClick">Удалить</el-button>
      </el-col>
    </el-row>
  </li>

</template>

<script lang="js" setup>

export default {
  name: "TodoItem",
  props: { item: Object, count: Number },
  mounted() {

  },
  methods: {
    onDeleteClick(evt) {
      evt.preventDefault();
      console.log(this.item);
      this.$store.dispatch('todolist/deleteTodo', this.item.id)
    },
    onCompleteClick() {
      this.$store.dispatch('todolist/changeCompletion', this.item.id)
    },
    onEditClick() {
      this.$store.commit('popup/openEditPopup', this.item);

    },
    onTTSClick() {
      this.$store.dispatch('speech/fetchTTS', this.item.name);
    }
  }
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
  width: calc(100% - 220px)
}

.el-row {
  justify-content: center;
}
.el-checkbox {
  margin-left: 8px;
}

.el-button {
  padding: 10px;
  margin-left: 8px;
}

</style>


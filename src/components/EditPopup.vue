<template>
  <el-dialog v-model="popup.isOpened" title="Shipping address">
    <el-form>
      <el-form-item
          prop="name"
      >
        <el-input
            v-model="popup.name"
            autocomplete="off"
        />
      </el-form-item>
      <el-form-item
          prop="description"
      >
        <el-input
            v-model="popup.description"
            type="textarea"
            autocomplete="off"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="popup.isOpened = false">Cancel</el-button>
        <el-button type="primary" @click="onEditConfirm"
        >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "EditPopup",
  computed: {
    popup() {
      return this.$store.state.popup.editTodo
    }
  },
  methods: {
    onEditConfirm() {
      this.$store.dispatch("todolist/editTodo", {
        name: this.popup.name,
        description: this.popup.description,
        id: this.popup.id
      })
      this.$store.commit("popup/close")
    }
  }
}

</script>

<style scoped>

</style>
<template>
  <el-row :gutter="20" align="middle">
    <el-col :span="3">
      <el-select
          v-model="storedSort.selectedSort"
          @change="onChangeOption"
          placeholder="Сортировка"
      >
        <el-option label="По имени" value="name" />
        <el-option label="По описанию" value="description" />
        <el-option label="По дате" value="date" />
      </el-select>
    </el-col>
    <el-col :span="5" style="display: flex; flex-wrap: nowrap">
      <el-input
          placeholder="Поиск..."
          v-model="searchText"
          @change="onChangeSearch"
      />
      <el-button><el-icon :size="20"><Search /></el-icon></el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Sort",
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    onChangeOption(evt) {
      this.$store.commit('sort/changeSort', evt)
    },
    onChangeSearch() {
      this.$store.commit('sort/changeSearchFilter', this.searchText);
    }
  },
  computed: {
    storedSort() {
      return this.$store.state.sort;
    }
  }
}
</script>

<style scoped>

</style>
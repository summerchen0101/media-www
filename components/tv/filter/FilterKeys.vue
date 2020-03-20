<template>
  <div class="filter_box">
    <div class="filter_result">
      <span class="filter_title">筛选条件：</span>
      <span v-if="filterItems.length === 0">全部</span>
      <a v-for="(item, i) in filterItems" :key="i" href="" @click.prevent="handleRemoveItem(item.type)">
        {{ item.label }}<i class="fa fa-times-circle" />
      </a>
    </div>
    <span class="result">共{{ count }}个筛选结果</span>
  </div>
</template>
<script>
export default {
  props: {
  },
  computed: {
    count () {
      return this.$store.getters[`${this.$route.params.category}/total`]
    },
    filterTypes () {
      return this.$store.getters[`${this.$route.params.category}/filterTypes`]
    },
    filterItems () {
      return _(this.filterTypes)
        .filter((type) => {
          return this.$route.query[type] !== undefined
        })
        .orderBy(type => Object.keys(this.$route.query).indexOf(type))
        .map((type) => {
          const arr = this.$store.getters[`${this.$route.params.category}/${type}`]
          const item = {
            ...arr.find(t => t.id === (+this.$route.query[type] || this.$route.query[type])),
            type
          }
          return item
        })
        .value()
    }
  },
  methods: {
    handleRemoveItem (type) {
      const query = { ...this.$route.query }
      delete query[type]
      this.$router.push({
        ...this.$route,
        query
      })
    }
  }
}
</script>

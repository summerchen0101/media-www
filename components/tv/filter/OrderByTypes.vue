<template>
  <div class="sorting_box">
    <span class="sorting_title">排序方式：</span>
    <nuxt-link
      v-for="(type,i) in types"
      :key="i"
      exact
      :to="{...$route, query: {...$route.query, orderBy: type}}"
      :class="{select: i === 0 && !$route.query.orderBy}"
    >
      {{ type | enum(`${$route.params.category}OrderType`) }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
  },
  computed: {
    types () {
      return this.$store.getters[`${this.$route.params.category}/orderTypes`]
    }
  },
  methods: {
  }
}
</script>

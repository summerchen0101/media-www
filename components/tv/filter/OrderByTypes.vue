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
      {{ $enum('OrderType', type) }}
    </nuxt-link>
    <!-- <a
      v-for="(t,i) in types"
      :key="i"
      href=""
      :class="$route.query.orderBy === t"
    >最具人气</a>
    <a href="">最多评论</a>
    <a href="">最新发佈</a> -->
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

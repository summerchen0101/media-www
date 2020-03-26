<template>
  <div class="sorting_box">
    <span class="sorting_title">排序方式：</span>
    <nuxt-link
      v-for="(type,i) in types"
      :key="i"
      active-class=""
      :to="{...$route, query: {...$route.query, page: 1, orderBy: type.code}}"
      :class="{select: $route.query.orderBy === type.code}"
    >
      {{ type.label }}
    </nuxt-link>
  </div>
</template>
<script>
import { OrderType } from '@/lib/constants'
export default {
  props: {
  },
  computed: {
    types () {
      return OrderType[this.$route.params.category]
    }
  },
  methods: {
  }
}
</script>

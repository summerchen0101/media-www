<template>
  <div class="sorting_box">
    <span class="sorting_title">排序方式：</span>
    <nuxt-link
      v-for="(type,i) in types"
      :key="i"
      exact
      :to="{...$route, query: {...$route.query, page: 1, orderBy: type.code}}"
      :class="{select: i === 0 && !$route.query.orderBy}"
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

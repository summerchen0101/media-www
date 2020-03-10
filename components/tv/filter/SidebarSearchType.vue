<template>
  <div class="tb_sub_select_box">
    <div class="tv_sub_stitle">
      {{ rule.title }}：
    </div>
    <ul class="tv_sub_select_tab">
      <li>
        <nuxt-link
          exact
          :class="{select: $route.query[rule.code] === undefined}"
          :to="{name: 'tv-filter-category',
                params: $route.params,
                query: {...$route.query, [rule.code]: undefined}}"
        >
          全部
        </nuxt-link>
      </li>
      <li v-for="(t,i) in rule.types" :key="i">
        <nuxt-link
          exact
          :to="{name: 'tv-filter-category',
                params: $route.params,
                query: {...$route.query, [rule.code]: t.id}}"
        >
          {{ t.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    rule: {
      type: Object,
      default: () => ({
        title: '',
        code: '',
        types: []
      })
    }
  },
  methods: {
  }
}
</script>

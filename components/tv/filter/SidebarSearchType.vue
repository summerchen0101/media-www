<template>
  <div class="tb_sub_select_box">
    <div class="tv_sub_stitle">
      {{ rule.title }}：
    </div>
    <ul class="tv_sub_select_tab">
      <li class="all">
        <nuxt-link
          active-class=""
          :class="{select: $route.query[rule.code] === undefined}"
          :to="{name: 'tv-filter-category',
                params: $route.params,
                query: {...$route.query, page: 1,[rule.code]: undefined}}"
        >
          全部
        </nuxt-link>
      </li>
      <li v-for="(t,i) in rule.items" :key="i">
        <nuxt-link
          active-class=""
          :class="{select: $route.query[rule.code] === t.id}"
          :to="{name: 'tv-filter-category',
                params: $route.params,
                query: {...$route.query, page: 1, [rule.code]: t.id}}"
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
        items: []
      })
    }
  },
  methods: {
  }
}
</script>

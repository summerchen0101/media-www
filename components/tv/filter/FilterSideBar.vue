<template>
  <div class="tv_sub_left col-xs-12 col-sm-3 col-md-2">
    <CategorySelector />
    <SidebarSearchType v-for="(rule, i) in searchRules" :key="i" :rule="rule" />
  </div>
</template>
<script>
export default {
  components: {
    CategorySelector: () => import('@/components/tv/filter/CategorySelector'),
    SidebarSearchType: () => import('@/components/tv/filter/SidebarSearchType')
  },
  props: {
    searchRules: {
      type: Array,
      default: () => []
    }
  }
}
</script>

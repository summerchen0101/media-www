<template>
  <div class="tv_sub_left col-xs-12 col-sm-3 col-md-2">
    <FilterEntranceSelector />
    <SidebarSearchType v-for="(rule, i) in searchRules" :key="i" :rule="rule" />
  </div>
</template>
<script>
export default {
  components: {
    FilterEntranceSelector: () => import('@/components/tv/filter/FilterEntranceSelector'),
    SidebarSearchType: () => import('@/components/tv/filter/SidebarSearchType')
  },
  props: {
    searchRules: {
      type: Array,
      default: () => [
        {
          title: '类别',
          code: 'genres',
          types: [
            {
              label: '武打',
              id: 21
            },
            {
              label: '愛情',
              id: 20
            }
          ]
        },
        {
          title: '地区',
          code: 'region',
          types: [
            {
              label: '台灣',
              id: 5
            },
            {
              label: '日本',
              id: 7
            },
            {
              label: '美國',
              id: 8
            }
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="member_head">
      <TypeSelector />
      <a href="#" class="member_clearBtn" @click.prevent="handleClearRecord">
        <i class="fa fa-trash-o" />清除所有纪录
      </a>
    </div>
    <VideoRecordList :record-list="recordList" />
    <Paginator />
  </div>
</template>

<script>
export default {
  name: 'Record',
  layout: 'user',
  scrollToTop: true,
  watchQuery: true,
  key: to => to.fullPath,
  components: {
    TypeSelector: () => import('@/components/record/TypeSelector'),
    VideoRecordList: () => import('@/components/record/VideoRecordList')
  },
  async fetch ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('record/getTypes')
    await store.dispatch('record/getList')
    await store.dispatch('record/getTotal')
  },
  data () {
    return {
      category: this.$route.query.category
    }
  },
  computed: {
    recordList () {
      return this.category
        ? this.$store.getters['record/listByCategory'][this.category]
        : this.$store.getters['record/list']
    }
  },
  mounted () {
  },
  methods: {
    handleClearRecord () {
      return this.category
        ? this.$store.dispatch('record/removeByCategory', this.category)
        : this.$store.dispatch('record/removeAll')
    }
  },
  head () {
    return {
    }
  }
}
</script>

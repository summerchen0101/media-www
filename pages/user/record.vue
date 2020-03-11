<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="member_head">
      <TypeSelector />
      <ClearBtn />
    </div>
    <VideoRecordList />
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
    VideoRecordList: () => import('@/components/record/VideoRecordList'),
    ClearBtn: () => import('@/components/record/ClearBtn')
  },
  async fetch ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('record/getTypes')
    await store.dispatch('record/getList')
    await store.dispatch('record/getTotal')
  },
  mounted () {
  },
  methods: {
  },
  head () {
    return {
    }
  }
}
</script>

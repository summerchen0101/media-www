<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="member_head">
      <TypeSelector />
      <ClearBtn />
    </div>
    <VideoFavList />
    <Paginator />
  </div>
</template>

<script>
export default {
  name: 'Favorite',
  layout: 'user',
  scrollToTop: true,
  watchQuery: true,
  key: to => to.fullPath,
  components: {
    TypeSelector: () => import('@/components/favorite/TypeSelector'),
    VideoFavList: () => import('@/components/favorite/VideoFavList'),
    ClearBtn: () => import('@/components/favorite/ClearBtn')
  },
  async fetch ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    await store.dispatch('favorite/getList')
    await store.dispatch('favorite/getTotal')
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

<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="member_head">
      <TypeSelector />
      <ClearBtn :count="list.length" :category="$route.query.category" />
    </div>
    <VideoFavList :list="list" />
    <Paginator :page="page" :perpage="perpage" :count="count" @change="onPageChange" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const perpage = 10
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
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    const page = 1
    await store.dispatch('favorite/getList', { category: query.category, perpage, page })
    await store.dispatch('favorite/getTotal', { category: query.category })
    return {
      page,
      perpage,
      count: store.getters['favorite/total']
    }
  },
  computed: {
    ...mapGetters({
      list: 'favorite/list'
    })
  },
  mounted () {
  },
  methods: {
    async onPageChange (page) {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('favorite/getList', { category: this.$route.query.category, perpage, page })
      await this.$store.dispatch('favorite/getTotal', { category: this.$route.query.category })
      this.page = page
      this.count = this.$store.getters['favorite/total']
      this.$nuxt.$loading.finish()
    }
  },
  head () {
    return {
    }
  }
}
</script>

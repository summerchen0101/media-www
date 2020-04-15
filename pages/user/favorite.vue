<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="member_head">
      <TypeSelector />
      <!-- <button @click="addFav">
        ADD(test)
      </button> -->
      <ClearBtn :count="count" :category="$route.query.category" />
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
      perpage
    }
  },
  computed: {
    ...mapGetters({
      list: 'favorite/list',
      count: 'favorite/total'
    })
  },
  created () {
    this.$bus.$on('favorite/update', this.updateList)
  },
  methods: {
    async updateList () {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('favorite/getList',
        { category: this.$route.query.category, perpage, page: this.page })
      await this.$store.dispatch('favorite/getTotal', { category: this.$route.query.category })
      this.$nuxt.$loading.finish()
    },
    onPageChange (page) {
      this.page = page
      this.updateList()
    },

    /**
     * 新增收藏紀錄(測試用)
     */
    async addFav () {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('drama/addToFav', 2)
      await this.$store.dispatch('drama/addToFav', 3)
      await this.$store.dispatch('drama/addToFav', 4)
      await this.$store.dispatch('anime/addToFav', 7)
      await this.$store.dispatch('anime/addToFav', 8)
      await this.$store.dispatch('anime/addToFav', 9)
      this.$nuxt.$loading.finish()
      this.page = 1
      this.updateList()
    }
  },
  head () {
    return {
    }
  }
}
</script>

<template>
  <div class="member_right col-xs-12 col-sm-9 col-md-9">
    <div class="member_head">
      <TypeSelector />
      <!-- <button @click="addRecord">
        ADD(test)
      </button> -->
      <ClearBtn :count="count" :category="$route.query.category" @clear="count = 0" />
    </div>
    <VideoRecordList :list="list" />
    <Paginator :page="page" :perpage="perpage" :count="count" @change="onPageChange" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const perpage = 10
export default {
  name: 'Record',
  layout: 'user',
  watchQuery: true,
  key: to => to.fullPath,
  components: {
    TypeSelector: () => import('@/components/record/TypeSelector'),
    VideoRecordList: () => import('@/components/record/VideoRecordList'),
    ClearBtn: () => import('@/components/record/ClearBtn')
  },
  async asyncData ({ isDev, route, store, env, params, query, req, res, redirect, error }) {
    const page = 1
    await store.dispatch('record/getList', { category: query.category, perpage, page })
    await store.dispatch('record/getTotal', { category: query.category })
    return {
      page,
      perpage
    }
  },
  computed: {
    ...mapGetters({
      list: 'record/list',
      count: 'record/total'
    })
  },
  created () {
    this.$bus.$on('record/update', this.updateList)
  },
  methods: {
    async updateList () {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('record/getList', { category: this.$route.query.category, perpage, page: this.page })
      await this.$store.dispatch('record/getTotal', { category: this.$route.query.category })
      this.count = this.$store.getters['record/total']
      this.$nuxt.$loading.finish()
    },
    onPageChange (page) {
      this.page = page
      this.updateList()
    },

    /**
     * 新增影片紀錄 (測試用)
     */
    async addRecord () {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('record/add', 56)
      await this.$store.dispatch('record/add', 57)
      await this.$store.dispatch('record/add', 58)
      await this.$store.dispatch('record/add', 59)
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

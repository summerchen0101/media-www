<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <Breadcrumb :category="$route.params.category" />
      <div class="page_container">
        <div class="container tv_sub_container">
          <FilterSideBar :search-rules="searchRules" />
          <div class="tv_sub_right">
            <BlockAd :ad="topAd" />
            <FilterKeys />
            <OrderByTypes />
            <div class="tv_sub_list">
              <VideoItem
                v-for="(video, i) in list"
                :key="i"
                :video="video"
                :category="$route.params.category"
              />
            </div>
            <BlockAd :ad="bottomAd" />
            <paginator :page="page" :perpage="perpage" :count="count" @change="onPageChange" />
          </div>
        </div>
      </div>
      <Footer />
      <MobileFooterMenu />
      <ScrollTop />
      <APPDownloadPopup />
    </div>
  </div>
</template>

<script>
import { FilterType, OrderType } from '@/lib/constants'
const perpage = 30
export default {
  name: 'FilterPage',
  components: {
    FilterSideBar: () => import('@/components/tv/filter/FilterSideBar'),
    FilterKeys: () => import('@/components/tv/filter/FilterKeys'),
    OrderByTypes: () => import('@/components/tv/filter/OrderByTypes'),
    BlockAd: () => import('@/components/BlockAd')
  },
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath,
  middleware ({ store, redirect, query, params }) {
    if (!query.orderBy) {
      redirect({
        name: 'tv-filter-category',
        params,
        query: { ...query, orderBy: OrderType[params.category][0].code, t: new Date().getTime() }
      })
    }
  },
  async asyncData ({ store, redirect, query, params }) {
    const page = +query.page || 1
    const data = {
      ...query,
      perpage,
      page
    }
    const promiseArr = [
      store.dispatch('ad/getAds'),
      store.dispatch(`${params.category}/getList`, data),
      store.dispatch(`${params.category}/getTotal`, { ...query }),
      store.dispatch(`${params.category}/getOptions`)
    ]
    await Promise.all(promiseArr)
    return {
      topAd: store.getters['ad/filterTopAd'],
      bottomAd: store.getters['ad/filterBottomAd'],
      page,
      perpage,
      list: store.getters[`${params.category}/list`],
      count: store.getters[`${params.category}/total`]
    }
  },
  computed: {
    category () {
      return this.$route.params.category
    },
    categoryFilterTypes () {
      return this.$store.getters[`${this.$route.params.category}/filterTypes`]
    },
    searchRules () {
      return FilterType
        .filter(t => this.categoryFilterTypes.includes(t.code))
        .map((t) => {
          return {
            title: t.label,
            code: t.code,
            items: this.$store.getters[`${this.category}/${t.code}`]
          }
        })
    }
  },
  mounted () {

  },
  methods: {
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/tv_cat_list.css' }
      ]
    }
  }
}
</script>

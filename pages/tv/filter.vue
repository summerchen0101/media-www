<template>
  <div id="wrapper">
    <!-- /#sidebar-wrapper -->
    <div class="page_container">
      <div class="container tv_sub_container row">
        <FilterSideBar />
        <div class="tv_sub_right col-xs-12 col-sm-9 col-md-10">
          <BlockAd :ad="topAd" />
          <FilterKeys />
          <OrderByTypes />
          <div class="tv_sub_list">
            <VideoItem v-for="(item, i) in 20" :key="i" />
          </div>
          <BlockAd :ad="bottomAd" />
          <paginator :page="page" :count="count" @change="onPageChange" />
        </div>
      </div>
    </div>
    <!--page_container end-->
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
import UtilMixin from '@/plugins/mixins'
export default {
  name: 'FilterPage',
  components: {
    FilterSideBar: () => import('@/components/tv/filter/FilterSideBar'),
    FilterKeys: () => import('@/components/tv/filter/FilterKeys'),
    OrderByTypes: () => import('@/components/tv/filter/OrderByTypes'),
    BlockAd: () => import('@/components/BlockAd')
  },
  mixins: [UtilMixin],
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath,
  async asyncData ({ store, redirect, query }) {
    const page = parseInt(query.p) || 1
    await store.dispatch('ad/getAds', { page })
    return {
      topAd: store.getters['ad/filterTopAd'],
      bottomAd: store.getters['ad/filterBottomAd'],
      page,
      count: 100
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

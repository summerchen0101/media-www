<template>
  <div id="wrapper">
    <!-- /#sidebar-wrapper -->
    <div class="page_container">
      <div class="container tv_sub_container row">
        <FilterSideBar />
        <div class="tv_sub_right col-xs-12 col-sm-9 col-md-10">
          <div class="ad-box mb-20">
            <a
              :title="topAd.title"
              class="item"
              :href="topAd.url"
              :target="topAd.is_blank == 'Y' ? '_blank' : '_self'"
              @click="topAd.url ? $api.getAdInfo({params: {id: topAd.id}}) : null"
            >
              <img :src="topAd.image_url">
            </a>
          </div>
          <div class="filter_box">
            <span class="filter_title">筛选条件：</span>
            <a href="">悬疑<i class="fa fa-times-circle" /></a>
            <a href="">韩国<i class="fa fa-times-circle" /></a>
            <a href="">2016<i class="fa fa-times-circle" /></a>
            <span class="result">共884个筛选结果</span>
          </div>
          <div class="sorting_box">
            <span class="sorting_title">排序方式：</span>
            <a href="" class="select">最具人气</a>
            <a href="">最多评论</a>
            <a href="">最新发佈</a>
          </div>
          <div class="tv_sub_list">
            <VideoItem v-for="(item, i) in 20" :key="i" />
          </div>
          <div class="ad-box mb-20">
            <a
              :title="bottomAd.title"
              class="item"
              :href="bottomAd.url"
              :target="bottomAd.is_blank == 'Y' ? '_blank' : '_self'"
              @click="bottomAd.url ? $api.getAdInfo({params: {id: bottomAd.id}}) : null"
            >
              <img :src="bottomAd.image_url">
            </a>
          </div>
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
    FilterSideBar: () => import('@/components/tv/FilterSideBar')
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

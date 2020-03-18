<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <!--banner start-->
      <div class="page_banner" style="background-image: url('/images/page_banner.jpg');" />
      <!--banner end-->
      <div class="page_container">
        <div class="container">
          <!-- Nav tabs -->
          <ul class="nav nav-tabs ranking-tabs" role="tablist">
            <nuxt-link
              v-for="(cate, index) in cates"
              :key="index"
              tag="li"
              active-class="active"
              :class="{active: index === 0 && !$route.query.category}"
              exact
              :to="{...$route, query: {category: cate.code}}"
            >
              <a href="">{{ cate.label }}排行</a>
            </nuxt-link>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content ranking-tab-content">
            <div class="ranking-head">
              <i :class="current.icon" />{{ current.label }}排行榜 - 今日TOP20
            </div>
            <div class="ranking-body">
              <div class="tv_sub_list">
                <VideoItem v-for="(item, i) in 20" :key="i" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--page_container end-->
      <Footer />
      <ScrollTop />
    </div>
  </div>
</template>

<script>
import { Category } from '@/lib/constants/Category'
export default {
  name: 'Rank',
  layout: 'main',
  components: {},
  asyncData ({ store, redirect, params }) {
    return {
      cates: Category
    }
  },
  data () {
    return {
    }
  },
  computed: {
    current () {
      return this.cates.find(t => t.code === this.$route.query.category) || {}
    }
  },
  watchQuery: true,
  key: to => to.fullPath,
  mounted () {

  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/ranking.css' }
      ]
    }
  }
}
</script>

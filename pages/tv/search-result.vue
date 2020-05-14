<template>
  <div id="wrapper">
    <!-- /#sidebar-wrapper -->
    <div id="page-content-wrapper">
      <!--banner start-->
      <div class="page_banner" style="background-image: url('/images/page_banner.jpg');" />
      <!--banner end-->
      <div class="page_container">
        <div class="container">
          <div class="search_bar_head">
            <span>影音<b>搜寻</b></span>
            <form action="" class="search_form">
              <select v-model="form.category" class="form-control">
                <option value="">
                  分类
                </option>
                <option v-for="(c, i) in categorys" :key="i" :value="c.code">
                  {{ c.label }}
                </option>
              </select>
              <input v-model.trim="form.keyword" type="text" class="form-control">
              <button class="btn" type="submit" @click.prevent="onSearch">
                <i class="fa fa-search" />搜全网
              </button>
            </form>
          </div>
          <div v-if="list.length === 0" class="tv_sub_list no-data">
            查无相关数据
          </div>
          <div class="search_tv_detail">
            <VideoItem
              v-for="(video, i) in list"
              :key="i"
              :video="video"
              :category="$route.query.category"
            />
          </div>
          <!--page_content_s end-->
          <paginator :page="page" :count="count" :perpage="perpage" @change="onPageChange" />
        </div>
        <!--page_container end-->
        <Footer />
        <MobileFooterMenu />
        <ScrollTop />
        <APPDownloadPopup />
      </div>
    </div>
  </div>
</template>

<script>
import { Category } from '@/lib/constants'
const perpage = 30
export default {
  name: 'SearchResult',
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath + new Date().getTime(),
  async asyncData ({ store, redirect, query }) {
    const page = parseInt(query.page) || 1
    await store.dispatch('search/getTotal', query)
    await store.dispatch('search/getList', {
      ...query,
      page,
      perpage
    })
    return {
      page,
      perpage,
      count: store.getters['search/total'],
      list: store.getters['search/list'],
      form: {
        category: query.category,
        keyword: query.keyword
      }
    }
  },
  data () {
    return {
      keyword: '两个世界',
      categorys: Category
    }
  },
  mounted () {
  },
  methods: {
    onSearch (e) {
      e.target.blur()
      if (!(this.form.category && this.form.keyword)) {
        this.$alert('请选择分类及输入关键字')
        return
      }
      this.$router.push({ name: 'tv-search-result', query: { ...this.form, t: new Date().getTime() } })
    }
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/search_list.css' }
      ]
    }
  }
}
</script>

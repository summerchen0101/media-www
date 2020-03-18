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
            <span>影音<b>搜索</b></span>
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
          <div class="search_tv_detail">
            <VideoItem v-for="(item, i) in 15" :key="i" />
          </div>
          <div class="search_tv_detail_resultBox">
            <div class="search_tv_detail_head">
              <div class="search_tv_sort">
                <div class="search_tv_relative_title">
                  相关度
                </div>
              </div>
              <div class="search_tv_totalResult">
                共找到<b>15,283</b>个视频
              </div>
            </div>
            <div class="search_tv_list">
              <RelateVideoItem v-for="i in 10" :key="i" :keyword="keyword" />
            </div>
            <!--search_tv_detail_resultBox end-->
            <div class="search_tv_relative">
              <div class="search_tv_relative_title">
                相关搜索
              </div>
              <div class="search_tv_relative_content">
                <a v-for="(item, i) in 10" :key="i" href="">两个世界</a>
              </div>
            </div>
            <!--search_tv_relative end-->
            <Paginator :page="page" :count="count" @change="onPageChange" />
          </div>
          <!--page_content_s end-->
        </div>
        <!--page_container end-->
        <Footer />
        <ScrollTop />
      </div>
    </div>
  </div>
</template>

<script>
import { Category } from '@/lib/constants/Category'
export default {
  name: 'SearchResult',
  components: {
    RelateVideoItem: () => import('@/components/tv/RelateVideoItem')
  },
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath,
  asyncData ({ store, redirect, query }) {
    const page = parseInt(query.p) || 1
    return {
      page,
      count: 100,
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
    onSearch () {
      this.$router.push({ name: 'tv-search-result', query: { ...this.form } })
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

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
            <li
              v-for="(cate, index) in cates"
              :key="index"
              role="presentation"
              :class="{active: currentTab === index}"
            >
              <a
                :href="`#ranking${index}`"
                :aria-controls="`#ranking${index}`"
                role="tab"
                data-toggle="tab"
                @click="currentTab = index"
              >{{ cate.label }}排行</a>
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content ranking-tab-content">
            <div
              v-for="(cate, index) in cates"
              :id="`#ranking${index}`"
              :key="index"
              role="tabpanel"
              class="tab-pane"
              :class="{active: currentTab === index}"
            >
              <div class="ranking-head">
                <i :class="cate.icon" />{{ cate.label }}排行榜 - 今日TOP20
              </div>
              <div class="ranking-body">
                <div class="tv_sub_list">
                  <VideoItem v-for="(item, i) in 20" :key="i" />
                </div>
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
export default {
  name: 'Rank',
  layout: 'main',
  components: {},
  asyncData ({ store, redirect, params }) {
    return {
      cates: [
        {
          label: '戏剧',
          icon: 'icon-television'
        },
        {
          label: '电影',
          icon: 'icon-movie-symbol-of-video-camera'
        },
        {
          label: '动漫',
          icon: 'icon-cartoons-character-with-big-eyes'
        },
        {
          label: '综艺',
          icon: 'icon-karaoke-microphone-icon'
        }
      ]
    }
  },
  data () {
    return {
      currentTab: 0
    }
  },
  watchQuery: true,
  key: to => to.fullPath,
  watch: {
    currentTab () {
      this.$nextTick(() => {

      })
    }
  },
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

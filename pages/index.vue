<template>
  <div>
    <component
      :is="slickComponent"
      v-if="topAds.length > 0"
      ref="slick"
      :options="slickOptions"
      class="banner-box"
    >
      <a
        v-for="(ad, index) in topAds"
        :key="index"
        :title="ad.title"
        class="item"
        :href="ad.url"
        :target="ad.newWin ? '_blank' : '_self'"
        @click="ad.url ? $api.getAdInfo({params: {id: ad.id}}) : null"
      >
        <img :src="resolveResource(ad.imgUrl)">
      </a>
    </component>
    <div v-else>
      <img src="/images/index/banner-default.png">
    </div>
    <div class="index_container">
      <div class="index_block">
        <div class="container">
          <a id="section1" />
          <div class="head_title">
            <span class="index_mtitle">
              <i class="icon-television" />戏剧
            </span>
            <nuxt-link
              :to="{name: 'tv-filter-category', params: {category: 'drama'}}"
              class="index_more"
            >
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_tv_list">
              <VideoItem v-for="(video, i) in dramaList" :key="i" :video="video" category="drama" />
            </div>
            <!--index_tv_list end-->
            <RankBox category="drama" />
            <!--rank_box end-->
          </div>
          <!--index_content end-->
          <BlockAd :ad="fixedBlockAds[0]" />
        </div>
        <!--container end-->
      </div>
      <div class="index_block">
        <div class="container">
          <a id="section2" />
          <div class="head_title">
            <span class="index_mtitle">
              <i class="icon-television" />电影
            </span>
            <nuxt-link
              :to="{name: 'tv-filter-category', params: {category: 'movie'}}"
              class="index_more"
            >
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_tv_list">
              <VideoItem v-for="(video, i) in movieList" :key="i" :video="video" category="movie" />
            </div>
            <!--index_tv_list end-->
            <RankBox category="movie" />
            <!--rank_box end-->
          </div>
          <!--index_content end-->
          <BlockAd :ad="fixedBlockAds[1]" />
        </div>
        <!--container end-->
      </div>
      <div class="index_block">
        <div class="container">
          <a id="section3" />
          <div class="head_title">
            <span class="index_mtitle">
              <i class="icon-karaoke-microphone-icon" />综艺
            </span>
            <nuxt-link
              :to="{name: 'tv-filter-category', params: {category: 'variety'}}"
              class="index_more"
            >
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_movie_list">
              <VideoItem
                v-for="(video, i) in varietyList"
                :key="i"
                :video="video"
                category="variety"
              />
            </div>
            <!--index_tv_list end-->
            <RankBox category="variety" />
          </div>
          <!--index_content end-->
          <BlockAd :ad="fixedBlockAds[2]" />
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section4" />
          <div class="head_title">
            <span class="index_mtitle">
              <i class="icon-cartoons-character-with-big-eyes" />动漫
            </span>

            <nuxt-link
              :to="{name: 'tv-filter-category', params: {category: 'anime'}}"
              class="index_more"
            >
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox">
            <div class="slider_list">
              <VideoItem
                v-for="(video, i) in animeList"
                :key="i"
                :video="video"
                class="index_slide_unit"
                category="anime"
              />
            </div>
          </div>
          <!--index_content end-->
          <BlockAd :ad="fixedBlockAds[3]" />
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
    </div>
    <!--index_container end-->
    <Footer />
    <IndexScrollTop />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Index',
  layout: 'main',
  components: {
    Slick: () => import('vue-slick'),
    BlockAd: () => import('@/components/BlockAd'),
    RankBox: () => import('@/components/index/RankBox')
  },
  async fetch ({ app, store, redirect }) {
    const actions = [
      'ad/getAds',
      'drama/getLatestList',
      'movie/getLatestList',
      'anime/getLatestList',
      'variety/getLatestList',
      'drama/getTopList',
      'variety/getTopList',
      'movie/getTopList'
    ]
    const promises = actions.map(actionName => store.dispatch(actionName))
    await Promise.all(promises)
  },
  data () {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true
      },
      slickComponent: ''
    }
  },
  computed: {
    ...mapGetters({
      topAds: 'ad/indexTopAds',
      blockAds: 'ad/indexBlockAds',
      dramaList: 'drama/latestList',
      latestMovie: 'movie/latest',
      movieList: 'movie/latestList',
      animeList: 'anime/latestList',
      varietyList: 'variety/latestList'
    }),
    fixedBlockAds () {
      const blockNum = 5
      const _arr = []
      const _shuffleArr = _.shuffle(this.blockAds)
      for (let i = 0; i < blockNum; i++) {
        _arr.push(_shuffleArr[i % _shuffleArr.length])
      }
      return _arr
    }
  },
  created () {},
  mounted () {
    this.$nextTick(function () {
      this.slickComponent = 'Slick'
    })
  },
  methods: {
  },
  head () {
    return {
      // script: [
      //   { type: 'text/javascript', src: '/js/script.js', defer: true, body: true }
      // ],

      link: [{ rel: 'stylesheet', href: '/css/index.css' }]
    }
  }
}
</script>

<style lang="scss">
</style>

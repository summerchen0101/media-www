<template>
  <div>
    <div class="banner-box">
      <a
        v-for="(ad, index) in topAds"
        :key="index"
        :title="ad.title"
        class="item"
        :href="ad.url"
        :target="ad.is_blank == 'Y' ? '_blank' : '_self'"
        @click="ad.url ? $api.getAdInfo({params: {id: ad.id}}) : null"
      >
        <img :src="ad.image_url" class="show-pc">
        <img :src="ad.image_url" alt="" class="show-mb">
      </a>
    </div>
    <div class="index_container">
      <!--index block start-->
      <div class="index_block">
        <div class="container">
          <a id="section1" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-television" />戏剧</span>
            <nuxt-link :to="{name: 'tv-filter'}" class="index_more">
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_tv_list">
              <VideoItem v-for="(item, i) in 10" :key="i" />
            </div>
            <!--index_tv_list end-->
            <RankBox />
            <!--rank_box end-->
          </div>
          <!--index_content end-->
          <BlockAd :ad="fixedBlockAds[0]" />
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section2" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-movie-symbol-of-video-camera" />电影</span>

            <nuxt-link :to="{name: 'tv-filter'}" class="index_more">
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_variety_list_big">
              <MovieVideoItem />
            </div>
            <div class="index_variety_list">
              <MovieVideoItem v-for="(item, i) in 8" :key="i" />
            </div>
          </div>
          <!--index_content end-->
          <BlockAd :ad="fixedBlockAds[1]" />
        </div>
        <!--container end-->
      </div>
      <!--index block end-->
      <div class="index_block">
        <div class="container">
          <a id="section3" />
          <div class="head_title">
            <span class="index_mtitle"><i class="icon-karaoke-microphone-icon" />综艺</span>
            <nuxt-link :to="{name: 'tv-filter'}" class="index_more">
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox index_contentBox_column">
            <div class="index_movie_list">
              <VideoItem v-for="(item, i) in 10" :key="i" />
            </div>
            <!--index_tv_list end-->
            <RankBox />
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
            <span class="index_mtitle"><i class="icon-cartoons-character-with-big-eyes" />动漫</span>

            <nuxt-link :to="{name: 'tv-filter'}" class="index_more">
              更多
            </nuxt-link>
          </div>
          <!--head_title end-->
          <div class="index_contentBox">
            <div class="slider_list">
              <SlideVideoItem v-for="(item, i) in 10" :key="i" />
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
    BlockAd: () => import('@/components/index/BlockAd'),
    RankBox: () => import('@/components/index/RankBox'),
    MovieVideoItem: () => import('@/components/index/MovieVideoItem'),
    SlideVideoItem: () => import('@/components/index/SlideVideoItem')
  },
  async fetch ({ app, store, redirect }) {
    await store.dispatch('ad/getAds')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      topAds: 'ad/indexTopAds',
      blockAds: 'ad/indexBlockAds'
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
  created () {
  },
  mounted () {
    setTimeout(this.jqFix, 800)
  },
  methods: {
    jqFix () {
      $('.banner-box').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      })
      $('.slider_list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      })
    }
  },
  head () {
    return {
      // script: [
      //   { type: 'text/javascript', src: '/js/script.js', defer: true, body: true }
      // ],

      link: [
        { rel: 'stylesheet', href: '/css/index.css' }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>

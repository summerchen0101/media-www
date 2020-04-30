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
        @click.prevent="ad.url ? $api.ad.getAdInfo({id: ad.id}) : null"
      >
        <img :src="resolveResource(ad.imgUrl)">
      </a>
    </component>
    <div v-else>
      <img src="/images/index/banner-default.png">
    </div>
    <div class="index_container">
      <CategoryBlock category="drama" :ad="fixedBlockAds[0]" :list="dramaList" />
      <CategoryBlock category="movie" :ad="fixedBlockAds[1]" :list="movieList" />
      <CategoryBlock category="variety" :ad="fixedBlockAds[2]" :list="varietyList" />
      <CategoryLine category="anime" :ad="fixedBlockAds[3]" :list="animeList" />
    </div>
    <Footer />
    <MobileFooterMenu />
    <ScrollTop />
    <APPDownloadPopup />
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
    RankBox: () => import('@/components/index/RankBox'),
    CategoryBlock: () => import('@/components/index/CategoryBlock'),
    CategoryLine: () => import('@/components/index/CategoryLine')
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
  mounted () {
    this.$nextTick(() => {
      this.slickComponent = 'Slick'
      $('html,body').scrollTop(0)
    })
    if (!this.$session('dontShowAgain') && !this.$store.getters['site/shownAppPopup']) {
      this.$bus.$emit('open:app-download-popup', true)
      this.$store.commit('site/changeAppPopupShownStatus', true)
    }
  },
  head () {
    return {
      link: [{ rel: 'stylesheet', href: '/css/index.css' }]
    }
  }
}
</script>

<style lang="scss">
</style>

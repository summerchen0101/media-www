<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <Breadcrumb :title="detail.title" :category="$route.query.category" />
      <div class="page_container video_container">
        <div class="video_player_box">
          <div class="container video_player_info_title">
            {{ detail.title }}：{{ currentEpisode.title }}
          </div>
          <div class="container video_player_container row">
            <VideoPlayer :episode="currentEpisode" />
            <VideoInfoWrap :info="detail" />
          </div>
          <VideoIntro :desc="detail.desc" :views="detail.views" />
        </div>
        <div class="container tv_detail_content row">
          <div class="tv_detail_left col-xs-12 col-sm-8 col-md-9">
            <FeaturedVideoList />
            <!--tv_detail_hot_select end-->
            <BlockAd :ad="blockAd" />
            <VideoComment />
            <!--tv_detail_comment end-->

            <!--page_list end-->
          </div>
          <div class="tv_detail_right col-xs-12 col-sm-4 col-md-3">
            <BlockAd :ad="rightAd" class="ad-box-s" />
            <MaybeLikeList :list="maybeLikeList" />
            <HotList />
          </div><!-- tv_detail_right end -->
        </div>
      </div>

      <Footer />
    </div>
    <ScrollTop />
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  layout: 'main',
  watchQuery: true,
  key: to => to.fullPath,
  components: {
    VideoInfoWrap: () => import('@/components/tv/video-detail/VideoInfoWrap'),
    VideoIntro: () => import('@/components/tv/video-detail/VideoIntro'),
    VideoComment: () => import('@/components/tv/video-detail/VideoComment'),
    MaybeLikeList: () => import('@/components/tv/video-detail/MaybeLikeList'),
    VideoPlayer: () => import('@/components/tv/video-detail/VideoPlayer'),
    HotList: () => import('@/components/tv/video-detail/HotList'),
    FeaturedVideoList: () => import('@/components/tv/video-detail/FeaturedVideoList'),
    Breadcrumb: () => import('@/components/tv/video-detail/Breadcrumb'),
    BlockAd: () => import('@/components/BlockAd')
  },
  async middleware ({ app, store, redirect, query }) {
    await store.dispatch(`${query.category}/getSources`, query.id)
    const sources = store.getters[`${query.category}/sources`]
    const episodeBySource = store.getters[`${query.category}/episodeBySource`]
    if (!(episodeBySource[query.source] && episodeBySource[query.source][query.episode])) {
      // 如果query沒有播放集數時, 找尋有播放集數的來源
      const i = sources.findIndex(t => t.episodes.length > 0)
      if (i === -1) {
        app.router.app.$alert('沒有播放來源')
        return redirect('/')
      }
      const source = sources[i].id
      const episode = sources[i].episodes[0].id
      redirect({ name: 'tv-video-detail', query: { ...query, source, episode, t: new Date().getTime() } })
    }
  },
  async asyncData ({ store, redirect, query }) {
    const episodeBySource = store.getters[`${query.category}/episodeBySource`]
    const promiseArr = [
      store.dispatch('ad/getAds'),
      store.dispatch(`${query.category}/getFavStatus`, query.id),
      store.dispatch(`${query.category}/getDetail`, query.id),
      store.dispatch(`${query.category}/getTopList`, 10),
      store.dispatch(`${query.category}/getCommentList`, { id: query.id }),
      store.dispatch(`${query.category}/getCommentTotal`, { id: query.id }),
      store.dispatch('record/add', query.episode)
    ]
    await Promise.all(promiseArr)
    return {
      rightAd: store.getters['ad/videoRightAd'],
      blockAd: store.getters['ad/videoBlockAd'],
      currentEpisode: episodeBySource[query.source][query.episode],
      maybeLikeList: store.getters[`${query.category}/maybeLikeList`]
    }
  },
  data () {
    return {}
  },
  computed: {
    detail () {
      return this.$store.getters[`${this.$route.query.category}/detail`]
    }
  },
  mounted () {

  },
  methods: {
  },
  head () {
    return {
      title: `${this.siteTitle} - ${this.detail.title}(${this.currentEpisode.title})`,
      link: [
        { rel: 'stylesheet', href: '/css/video_detail.css' }
      ]
    }
  }
}

</script>

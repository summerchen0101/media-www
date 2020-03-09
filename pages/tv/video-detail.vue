<template>
  <div id="wrapper">
    <div id="page-content-wrapper">
      <div class="video_player_info_path">
        <div class="container">
          <ul>
            <li><a href="index.html">首页</a></li> >
            <li><a href="tv_list.html">电视剧</a></li> >
            <li><a href="tv_korea_detail.html">太阳的后裔</a></li>
          </ul>
        </div>
      </div>
      <div class="page_container video_container">
        <div class="video_player_box">
          <div class="container video_player_info_title">
            太阳的后裔：第1集
          </div>
          <div class="container video_player_container row">
            <div class="video_player col-sm-12 col-md-9">
              <iframe width="100%" src="https://www.youtube.com/embed/THb0wFbCrgw" frameborder="0" allowfullscreen />
            </div>
            <div class="video_player_side col-sm-12 col-md-3">
              <div class="video_play_side_list">
                <div class="tab_container video_play_side_tab_container">
                  <div id="" class="tab_intro">
                    <div class="tab_head">
                      <h3>剧集资讯</h3>
                      <div class="user-act">
                        <div class="collect-box">
                          <a href=""><i class="fa fa-heart" /><b>收藏</b></a>
                        </div>
                      </div>
                    </div>
                    <VideoInfo />
                    <VideoSourceList :episode="episode" />
                    <!-- tab_series -->
                  </div>
                  <!-- #tab1 -->
                </div>
                <!-- .tab_container -->
              </div>
            </div>
          </div>
          <VideoIntro />
        </div>
        <div class="container tv_detail_content row">
          <div class="tv_detail_left col-xs-12 col-sm-8 col-md-9">
            <div class="tv_detail_hot_select">
              <div class="tv_detail_head">
                <span class="tv_detail_mtitle">热剧精选</span>
              </div>
              <div class="tv_detail_hot_select_list">
                <VideoItem v-for="i in 10" :key="i" />
              </div>
            </div>
            <!--tv_detail_hot_select end-->
            <BlockAd :ad="blockAd" />
            <VideoComment />
            <!--tv_detail_comment end-->
            <Paginator />
            <!--page_list end-->
          </div>
          <div class="tv_detail_right col-xs-12 col-sm-4 col-md-3">
            <BlockAd :ad="rightAd" />
            <MaybeLikeList />
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
  components: {
    VideoInfo: () => import('@/components/tv/VideoInfo'),
    VideoIntro: () => import('@/components/tv/VideoIntro'),
    VideoSourceList: () => import('@/components/tv/VideoSourceList'),
    VideoComment: () => import('@/components/tv/VideoComment'),
    MaybeLikeList: () => import('@/components/tv/MaybeLikeList'),
    HotList: () => import('@/components/tv/HotList'),
    BlockAd: () => import('@/components/BlockAd')
  },
  async asyncData ({ store, redirect, query }) {
    await store.dispatch('ad/getAds')
    return {
      rightAd: store.getters['ad/videoRightAd'],
      blockAd: store.getters['ad/videoBlockAd'],
      episode: parseInt(query.episode)
    }
  },
  data () {
    return {}
  },
  mounted () {

  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/video_detail.css' }
      ]
    }
  }
}

</script>

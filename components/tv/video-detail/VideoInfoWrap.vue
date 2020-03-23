<template>
  <div class="video_player_side col-sm-12 col-md-3">
    <div class="video_play_side_list">
      <div class="tab_container video_play_side_tab_container">
        <div id="" class="tab_intro">
          <div class="tab_head">
            <h3>剧集资讯</h3>
            <AddToFavorite />
          </div>
          <VideoInfo :info="info" />
          <VideoSourceList
            :episode="$route.query.episode"
            :sources="videoSources"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    VideoInfo: () => import('@/components/tv/video-detail/VideoInfo'),
    VideoSourceList: () => import('@/components/tv/video-detail/VideoSourceList'),
    AddToFavorite: () => import('@/components/tv/video-detail/AddToFavorite')
  },
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    videoSources () {
      return [
        { episodeList: [1, 2, 3] },
        { episodeList: [1, 2, 3] }
      ]
    }
  },
  methods: {
  }
}
</script>

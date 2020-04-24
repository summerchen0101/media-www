<template>
  <a
    class="video_unit"
    @click.prevent="routerAuthDetector({
      name: 'tv-video-detail',
      query: { id: video.id, category: category }
    })"
  >
    <div
      class="index_variety_img index_unit_img "
      :style="`background-image: url('${resolveResource(video.imgUrl)}');`"
    />
    <div class="index_info">
      <div class="index_unit_title">
        {{ video.title }}
      </div>
      <div class="index_unit_txt">
        {{ subText }}
      </div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    category: {
      type: String,
      default: () => ''
    },
    video: {
      type: Object,
      default: () => ({
        id: 123,
        imgUrl: 'https://fakeimg.pl/218x290',
        title: 'XXXX',
        episodeCount: 99,
        episodeStatus: 'serializing'
      })
    }
  },
  computed: {
    subText () {
      if (this.category === 'movie') {
        return ''
      } else if (this.video.episodeStatus === 'serializing') {
        if (this.video.episodeCount) {
          return `更新至第${this.video.episodeCount}集`
        }
        return `更新至${this.video.latestEpisode}`
      } else {
        return '已完結'
      }
    }
  }
}
</script>

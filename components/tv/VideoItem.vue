<template>
  <nuxt-link
    :to="{name: 'tv-video-detail', query: {id: video.id, episode: video.episodeCount || undefined}}"
    class="video_unit"
  >
    <div class="index_variety_img index_unit_img " :style="`background-image: url('${video.imgUrl}');`" />
    <div class="index_info">
      <div class="index_unit_title">
        {{ video.title }}
      </div>
      <div v-if="video.episodeStatus === 'serializing'" class="index_unit_txt">
        更新至第{{ video.episodeCount }}集
      </div>
      <div v-else-if="video.episodeStatus === 'end'" class="index_unit_txt">
        已完結
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  props: {
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
  methods: {
  }
}
</script>

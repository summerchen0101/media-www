<template>
  <div class="video_player col-sm-12 col-md-9">
    <div id="player" />
  </div>
</template>
<script>
import YouTubePlayer from 'youtube-player'
export default {
  props: {
  },
  data () {
    return {
      category: this.$route.query.category,
      id: this.$route.query.id,
      player: null,
      fakeEpisodeId: 57
    }
  },
  mounted () {
    this.player = YouTubePlayer('player', {
      videoId: 'FvTmSB4tDZg',
      width: '100%',
      playerVars: {
        autoplay: 0
      }
    })

    /**
     * 播放狀態
     * -1: 'unstarted'
        0: 'ended'
        1: 'playing'
        2: 'paused'
        3: 'buffering'
        5: 'video cued
     */

    this.player.on('stateChange', ({ data }) => {
      if (data === 1 && this.$store.getters['user/login']) {
        this.$store.dispatch('record/add', this.fakeEpisodeId)
      }
    })
    // width="100%"
    //   src="https://www.youtube.com/embed/THb0wFbCrgw"
    //   frameborder="0"
    //   allowfullscreen
    //   @click.prevent="handleVideoClicked"
  },
  methods: {
  }
}
</script>

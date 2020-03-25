<template>
  <div class="video_player col-sm-12 col-md-9">
    <iframe
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      width="100%"
      height="360"
      :src="`${episode.analyzeRoot}${episode.sourceUrl}`"
    />
  </div>
</template>
<script>
// import YouTubePlayer from 'youtube-player'
export default {
  props: {
    episode: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      category: this.$route.query.category,
      id: this.$route.query.id
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

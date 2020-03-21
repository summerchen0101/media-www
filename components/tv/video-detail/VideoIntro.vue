<template>
  <div class="container video_player_info">
    <div class="video_palyer_intro">
      <h3>剧情介绍</h3>
      <div v-html="desc" />
    </div>
    <ul class="hot_list">
      <li><i class="fa fa-youtube-play" />{{ views }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    desc: {
      type: String,
      default: () => ''
    },
    views: {
      type: Number,
      default: () => 0
    }
  },
  methods: {
  }
}
</script>

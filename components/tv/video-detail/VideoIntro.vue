<template>
  <div class="container video_player_info">
    <div class="video_palyer_intro">
      <h3>剧情介绍</h3>
      <div v-html="desc" />
    </div>
    <ul class="hot_list">
      <li><i class="fa fa-youtube-play" />326,365,698</li>
      <li><a href=""><i class="fa fa-thumbs-up" />1,991,000</a></li>
      <li><a href=""><i class="fa fa-thumbs-down" />1,025</a></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    desc: {
      type: String,
      default: () => ''
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="maybe_like_box">
    <div class="maybe_like_mtitle">
      喜欢这部影片的人还喜欢
    </div>
    <div class="maybe_like_list">
      <nuxt-link
        v-for="(video, i) in list"
        :key="i"
        :to="{name: 'tv-video-detail',
              query: {category: $route.query.category, id: video.id}}"
        class="maybe_like_unit"
      >
        <div class="maybe_like_img">
          <img :src="resolveResource(video.imgUrl)" alt="">
          <!-- <div class="maybe_like_date">
            2017-01-09
          </div> -->
        </div>
        <div class="maybe_like_info">
          <div class="maybe_like_title">
            {{ video.title }}
          </div>
          <div class="maybe_like_view">
            播放: {{ video.views }}
          </div>
        </div>
      </nuxt-link>
    </div><!-- maybe_like_list end -->
  </div><!-- maybe_like_box end -->
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="member_video_unit">
    <a href="" class="member_delete" @click.prevent="$store.dispatch('record/removeById', video.id)">
      <i class="fa fa-times" />
    </a>
    <div class="member_video_img">
      <img :src="video.imgUrl" alt="">
      <!-- <div class="member_video_time">
        05:56
      </div> -->
    </div>
    <nuxt-link
      :to="{name: 'tv-video-detail',
            query: {cate: video.category, id: video.id}}"
      class="member_video_txt"
    >
      <div class="member_video_title">
        {{ video.title }}
      </div>
      <div class="member_video_view">
        <!-- {{ $enum('Category', video.category) }} -->
        {{ video.episode }}
      </div>
      <!-- <div class="member_video_view">
        <i class="fa fa-play" />已看到00分05秒
      </div> -->
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'VideoRecordItem',
  props: {
    video: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

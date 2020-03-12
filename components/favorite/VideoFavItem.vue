<template>
  <div class="member_video_unit">
    <a href="" class="member_delete" @click.prevent="$store.dispatch('favorite/removeById', video.id)">
      <i class="fa fa-times" />
    </a>
    <div class="member_video_img">
      <img :src="video.imgUrl" alt="">
    </div>
    <nuxt-link
      :to="{name: 'tv-video-detail',
            query: {cate: video.category, id: video.id}}"
      class="member_video_txt"
    >
      <div class="member_video_title">
        {{ video.title }}
      </div>
      <!-- <div class="member_video_view">
        {{ $enum('Category', video.category) }}
      </div> -->
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'VideoFavItem',
  props: {
    video: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

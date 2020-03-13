<template>
  <div class="member_video_unit">
    <a href="" class="member_delete" @click.prevent="$store.dispatch('record/removeById', video.id)">
      <i class="fa fa-times" />
    </a>
    <div class="member_video_img" :style="`background-image: url(${video.imgUrl});`" />
    <nuxt-link
      :to="{name: 'tv-video-detail',
            query: {cate: video.category, id: video.id}}"
      class="member_video_txt"
    >
      <div class="member_video_title">
        {{ video.title }}
      </div>
      <div class="member_video_view">
        {{ video.episode }}
      </div>
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

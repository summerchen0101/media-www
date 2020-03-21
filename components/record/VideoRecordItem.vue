<template>
  <div class="member_video_unit">
    <a href="" class="member_delete" @click.prevent="handleRemove">
      <i class="fa fa-times" />
    </a>
    <div class="member_video_img" :style="`background-image: url('${resolveResource(video.imgUrl)}');`" />
    <nuxt-link
      :to="{name: 'tv-video-detail',
            query: {category: video.category, id: video.mediaID}}"
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
  },
  methods: {
    async handleRemove () {
      await this.$store.dispatch('record/removeById', this.video.id)
      this.$bus.$emit('record/update')
    }
  }
}
</script>

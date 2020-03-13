<template>
  <div class="member_video_list">
    <div v-if="list.length === 0" class="member_noMsg">
      <div class="member_noImg">
        <i class="fa fa-history" />
      </div>
      <div class="member_noTxt">
        你暂时还没有收藏哦~
      </div>
    </div>
    <VideoFavItem
      v-for="(video, i) in list"
      :key="i"
      :video="video"
    />
  </div>
</template>

<script>
export default {
  name: 'VideoFavList',
  components: {
    VideoFavItem: () => import('@/components/favorite/VideoFavItem')
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

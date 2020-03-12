<template>
  <div class="member_video_list">
    <div v-if="favList.length === 0" class="member_noMsg">
      <div class="member_noImg">
        <i class="fa fa-history" />
      </div>
      <div class="member_noTxt">
        你暂时还没有收藏哦~
      </div>
    </div>
    <VideoFavItem
      v-for="(video, i) in favList"
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
  data () {
    return {
      category: this.$route.query.category
    }
  },
  computed: {
    favList () {
      return this.category
        ? this.$store.getters['favorite/listByCategory'][this.category]
        : this.$store.getters['favorite/list']
    }
  }
}
</script>

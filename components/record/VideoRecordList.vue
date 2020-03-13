<template>
  <div class="member_video_list">
    <div v-if="list.length === 0" class="member_noMsg">
      <div class="member_noImg">
        <i class="fa fa-history" />
      </div>
      <div class="member_noTxt">
        你暂时还没有观看纪录哦~
      </div>
    </div>
    <VideoRecordItem
      v-for="(video, i) in list"
      :key="i"
      :video="video"
    />
  </div>
</template>

<script>
export default {
  name: 'Videolist',
  components: {
    VideoRecordItem: () => import('@/components/record/VideoRecordItem')
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

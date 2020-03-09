<template>
  <div class="maybe_like_box">
    <div class="maybe_like_mtitle">
      喜欢这部影片的人还喜欢
    </div>
    <div class="maybe_like_list">
      <a v-for="i in 10" :key="i" href="" class="maybe_like_unit">
        <div class="maybe_like_img">
          <img src="/images/member/collect_img1.jpg" alt="">
          <div class="maybe_like_date">2017-01-09</div>
        </div>
        <div class="maybe_like_info">
          <div class="maybe_like_title">宋仲基宋慧乔最唯美的颁奖剪辑</div>
          <div class="maybe_like_view">播放:825,232</div>
        </div>
      </a>
    </div><!-- maybe_like_list end -->
  </div><!-- maybe_like_box end -->
</template>
<script>
export default {
  props: {
  },
  methods: {
  }
}
</script>

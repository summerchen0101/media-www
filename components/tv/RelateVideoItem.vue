<template>
  <div class="search_tv_unit">
    <div class="search_tv_img">
      <img src="/images/member/collect_img1.jpg" alt="">
      <div>
        <div class="search_tv_view">
          <i class="fa fa-play" />3,534
        </div>
        <div class="search_tv_time">
          05:56
        </div>
      </div>
    </div>
    <a href="tv_korea_detail.html" class="search_tv_txt">
      <div
        class="search_tv_title"
        v-html="$utils.markKeyword('李钟硕《两个世界》韩剧电视剧海报拍摄', keyword)"
      />
      <div class="search_tv_user_info">
        <div class="search_tv_user_name"><i class="fa fa-user" aria-hidden="true" />Sunny</div>
        <div class="search_tv_user_post"><i class="fa fa-clock-o" aria-hidden="true" />2月前</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    keyword: {
      type: String,
      default: () => ''
    }
  }
}
</script>

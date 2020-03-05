<template>
  <div class="rank_box">
    <div class="rank_mtitle">
      <i class="icon-ranking" />排行榜
    </div>
    <div class="rank_content">
      <div class="rank_img imgLiquidFill imgLiquid">
        <img src="/images/index/rank_img1.jpg" alt="">
      </div>
      <div class="rank_list">
        <a
          v-for="(item,i) in 10"
          :key="i"
          href="tv_korea_detail.html"
          class="rank_unit"
          :class="{'first_unit': i+1 === 1}"
        >
          <i :class="{first: i+1 === 1, second: i+1 === 2, third: i+1 === 3}">{{ i+1 }}</i><span>两个世界</span>
        </a>
      </div>
    </div>
    <!--rank_content end-->
  </div>
  <!--rank_box end-->
</template>
<script>
export default {
  props: {
  }
}
</script>

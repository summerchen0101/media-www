<template>
  <ul>
    <li>
      <span class="title">更新：</span>
      <span class="txt">{{ info.updateAt | date }}</span>
    </li>
    <li>
      <span class="title">主演：</span>
      <span class="txt">
        <a v-for="(item,i) in info.starring" :key="i" href="">{{ item }}</a>
      </span>
    </li>
    <li>
      <span class="title">导演：</span>
      <span class="txt">
        <a v-for="(item,i) in info.director" :key="i" href="">{{ item }}</a>
      </span>
    </li>
    <li>
      <span class="title">地区：</span>
      <span class="txt">
        <a href="">{{ info.region }}</a>
      </span>
    </li>
    <li>
      <span class="title">类型：</span>
      <span class="txt">
        <a v-for="(item,i) in info.genres" :key="i" href="">{{ item }}</a>
      </span>
    </li>
    <li>
      <span class="title">年份：</span>
      <span class="txt">
        <a href="">{{ info.year }}</a>
      </span>
    </li>
    <li class="share-box">
      <span class="title">分享：</span>
      <span class="txt">
        <a href="" class="weixin"><i class="fa fa-weixin" /></a>
        <a href="" class="twitter"><i class="fa fa-twitter" /></a>
        <a href="" class="facebook"><i class="fa fa-facebook" /></a>
        <a href="" class="google"><i class="fa fa-google-plus" /></a>
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
  }
}
</script>

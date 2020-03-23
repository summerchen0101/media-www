<template>
  <ul>
    <li>
      <span class="title">更新：</span>
      <span class="txt">{{ info.updateAt | date }}</span>
    </li>
    <li v-if="info.starring">
      <span class="title">主演：</span>
      <span class="txt">
        <a v-for="(item,i) in info.starring" :key="i" href="">{{ item }}</a>
      </span>
    </li>
    <li v-if="info.director">
      <span class="title">导演：</span>
      <span class="txt">
        <a v-for="(item,i) in info.director" :key="i" href="">{{ item }}</a>
      </span>
    </li>
    <li v-if="info.host">
      <span class="title">主持：</span>
      <span class="txt">
        <a v-for="(item,i) in info.host" :key="i" href="">{{ item }}</a>
      </span>
    </li>
    <li v-if="info.guest">
      <span class="title">来宾：</span>
      <span class="txt">
        <a v-for="(item,i) in info.guest" :key="i" href="">{{ item }}</a>
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
        <a
          href=""
          class="telegram"
          @click.prevent="shareTo('telegram', info.title)"
        ><i class="fa icon-telegram" /></a>
        <a
          href=""
          class="qq"
          @click.prevent="shareTo('qq', info.title)"
        ><i class="fa fa-qq" /></a>
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

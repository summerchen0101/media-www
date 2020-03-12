<template>
  <div class="rank_box">
    <div class="rank_mtitle">
      <i class="icon-ranking" />排行榜
    </div>
    <div class="rank_content">
      <div class="rank_img">
        <img src="/images/index/rank_img1.jpg" alt="">
      </div>
      <div class="rank_list">
        <nuxt-link
          v-for="(item,i) in topList"
          :key="i"
          :to="{name: 'tv-video-detail', query: {id: item.id}}"
          class="rank_unit"
          :class="{'first_unit': i+1 === 1}"
        >
          <i :class="{first: i+1 === 1, second: i+1 === 2, third: i+1 === 3}">{{ i+1 }}</i><span>{{ item.title }}</span>
          </a>
        </nuxt-link>
      </div>
    </div>
    <!--rank_content end-->
  </div>
  <!--rank_box end-->
</template>
<script>
export default {
  props: {
    category: {
      type: String,
      default: () => ''
    }
  },
  computed: {
    topList () {
      return this.$store.getters[`${this.category}/topList`]
    }
  }
}
</script>

<template>
  <div class="detail_rank_box">
    <div class="detail_rank_mtitle">
      电视剧热播榜
    </div>
    <div class="detail_rank_list">
      <div v-for="(item,i) in 10" :key="i">
        <span class="rank_num" :class="{org_num: i < 3}">{{ i+1 }}</span>
        <nuxt-link :to="{name: 'tv-video-detail'}" class="rank_title">
          W－两个世界
        </nuxt-link>
        <span class="rank_view">253,235,896</span>
      </div>
    </div>
  </div><!-- rank_box end -->
</template>
<script>
export default {
  props: {
  },
  methods: {
  }
}
</script>

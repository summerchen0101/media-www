<template>
  <div class="detail_rank_box">
    <div class="detail_rank_mtitle">
      {{ $route.query.category | enum('category') }}热播榜
    </div>
    <div class="detail_rank_list">
      <div v-for="(video,i) in list" :key="i">
        <span class="rank_num" :class="{org_num: i < 3}">{{ i+1 }}</span>
        <nuxt-link
          :to="{name: 'tv-video-detail',
                query: {category: $route.query.category, id: video.id}}"
          class="rank_title"
        >
          {{ video.title }}
        </nuxt-link>
        <span class="rank_view">{{ video.views }}</span>
      </div>
    </div>
  </div><!-- rank_box end -->
</template>
<script>
export default {
  props: {
  },
  computed: {
    list () {
      return this.$store.getters[`${this.$route.query.category}/topList`]
    }
  },
  methods: {
  }
}
</script>

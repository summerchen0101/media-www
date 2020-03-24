<template>
  <div class="tv_detail_hot_select">
    <div class="tv_detail_head">
      <span class="tv_detail_mtitle">{{ $route.query.category | enum('category') }}精选</span>
    </div>
    <div class="tv_detail_hot_select_list">
      <VideoItem
        v-for="(video, i) in list"
        :key="i"
        :video="video"
        :category="$route.query.category"
      />
    </div>
  </div>
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

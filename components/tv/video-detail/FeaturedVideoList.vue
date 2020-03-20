<template>
  <div class="tv_detail_hot_select">
    <div class="tv_detail_head">
      <span class="tv_detail_mtitle">热剧精选</span>
    </div>
    <div class="tv_detail_hot_select_list">
      <VideoItem
        v-for="i in 10"
        :key="i"
        :category="$route.query.category"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
  },
  methods: {
  }
}
</script>

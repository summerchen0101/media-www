<template>
  <div class="tab_series">
    <div id="accordion" class="panel-group" role="tablist" aria-multiselectable="true">
      <VideoSourceItem
        v-for="(source, index) in sources"
        :key="index"
        :index="index"
        :info="source"
        :episode="episode"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    VideoSourceItem: () => import('@/components/tv/video-detail/VideoSourceItem')
  },
  props: {
    episode: {
      type: Number,
      default: () => 1
    },
    sources: {
      type: Array,
      default: () => []
    }
  },
  methods: {
  }
}
</script>

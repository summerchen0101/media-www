<template>
  <div class="tab_series">
    <div id="accordion" class="panel-group" role="tablist" aria-multiselectable="true">
      <VideoSourceItem
        v-for="(source, index) in sources"
        :key="index"
        :index="index"
        :source="source"
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
  },
  computed: {
    sources () {
      return this.$store.getters[`${this.$route.query.category}/sources`]
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="index_block">
    <div class="container">
      <a id="section4" />
      <div class="head_title">
        <span class="index_mtitle">
          <i :class="toCategoryIcon(category)" />{{ category | enum('category') }}
        </span>

        <nuxt-link
          :to="{name: 'tv-filter-category', params: {category}}"
          class="index_more"
        >
          更多
        </nuxt-link>
      </div>
      <!--head_title end-->
      <div class="index_contentBox full-box">
        <div class="slider_list">
          <VideoItem
            v-for="(video, i) in list"
            :key="i"
            :video="video"
            class="index_slide_unit"
            category="anime"
          />
        </div>
      </div>
      <!--index_content end-->
      <BlockAd :ad="ad" />
    </div>
    <!--container end-->
  </div>
</template>
<script>
export default {
  components: {
    BlockAd: () => import('@/components/BlockAd')
  },
  props: {
    category: {
      type: String,
      default: ''
    },
    ad: {
      type: Object,
      default: () => ({})
    },
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<template>
  <div class="index_block">
    <div class="container">
      <a id="section1" />
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
      <div class="index_contentBox index_contentBox_column">
        <div class="index_tv_list">
          <VideoItem
            v-for="(video, i) in list"
            v-show="$utils.device === 'web' ? true : i !== list.length-1"
            :key="i"
            :video="video"
            :category="category"
          />
          <!-- WAP版時僅顯示9個(一排3個) -->
        </div>
        <!--index_tv_list end-->
        <RankBox :category="category" />
        <!--rank_box end-->
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
    BlockAd: () => import('@/components/BlockAd'),
    RankBox: () => import('@/components/index/RankBox')
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

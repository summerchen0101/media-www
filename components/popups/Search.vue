<template>
  <div id="searchModal" class="modal fade searchModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 id="myModalLabel" class="modal-title">
            搜寻
          </h4>
        </div>
        <div class="modal-body">
          <SearchBar />
          <div class="searchModal_head">
            热门搜寻：
          </div>
          <div class="searchModal_body">
            <a
              v-for="(video, i) in topList"
              :key="i"
              href=""
              @click.prevent="routerAuthDetector({
                name: 'tv-video-detail',
                query: { id: video.id, category: category }
              })"
            >
              <div
                class="searchModal_num"
                :class="{first: i === 0, second: i ===1, third: i === 2}"
              >
                {{ i+1 }}
              </div>
              <div class="searchModal_name">
                {{ video.title }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPopup',
  components: {
    SearchBar: () => import('@/components/SearchBar')
  },
  data () {
    return {
      category: ''
    }
  },
  computed: {
    topList () {
      return (this.category && this.$store.getters['search/topList']) || []
    }
  },
  watch: {
    $route () {
      $('#searchModal').modal('hide')
    }
  },
  mounted () {
    this.$bus.$on('search/categoryChanged', (category) => {
      console.log('search/categoryChanged')
      this.category = category
      if (this.category) {
        this.$store.dispatch('search/getTopList', { category, count: 10 })
      }
    })
  }
}
</script>

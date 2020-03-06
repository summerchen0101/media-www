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
          <SearchBar :on-search="onClickedSearch" />
          <div class="searchModal_head">
            热门搜寻：
          </div>
          <div class="searchModal_body">
            <a v-for="(item, i) in 10" :key="i" class="" href="">
              <div
                class="searchModal_num"
                :class="{first: i === 0, second: i ===1, third: i === 2}"
              >{{ i+1 }}</div>
              <div class="searchModal_name">雪暴</div>
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
  mounted () {},
  methods: {
    onClickedSearch () {
      $('#searchModal').modal('hide')
      this.$router.push({ name: 'tv-search-result' })
    }
  }
}
</script>

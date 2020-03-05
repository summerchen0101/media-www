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
          <div class="input-group">
            <input type="text" class="form-control" aria-describedby="basic-addon2">
            <span id="basic-addon2" class="input-group-addon">
              <a href="" @click.prevent="onClickedSearch"><i class="fa fa-search" /></a>
            </span>
          </div>
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
  components: {},
  mounted () {},
  methods: {
    onClickedSearch () {
      $('#searchModal').modal('hide')
      this.$router.push({ name: 'tv-search-result' })
    }
  }
}
</script>

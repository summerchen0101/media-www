<template>
  <div ref="modal" class="modal clickModal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <span class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times" /></span>
        <div class="modal-body text-center">
          <h2>
            下载APP<br>观看更即时
          </h2>
          <div class="link-box">
            <a :href="androidUrl" target="_blank" class="btn link-btn android-btn">
              <i class="fa fa-android" /> Android下载
            </a>
            <a :href="iosUrl" target="_blank" class="btn link-btn ios-btn">
              <i class="fa fa-apple" /> IOS下载
            </a>
          </div>
          <div v-if="showDontShowBtn" class="form-check check-box">
            <input id="exampleCheck1" v-model="dontShowAgain" type="checkbox" class="form-check-input" @change="onDontShow">
            <label class="form-check-label" for="exampleCheck1">不再显示</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatAppDownloadPopup',
  data () {
    return {
      androidUrl: 'https://apps99.cc/media/product/apk/release.apk',
      iosUrl: 'https://apps.apple.com/cn/app/hellorabbit/id1507918129',
      dontShowAgain: false,
      showDontShowBtn: false
    }
  },
  created () {
    this.$bus.$on('open:app-download-popup', this.openPopup)
    this.$bus.$on('close:app-download-popup', this.closePopup)
  },
  mounted () {
    $(this.$refs.modal).on('hidden.bs.modal', function (e) {
      this.showDontShowBtn = false
    })
  },
  methods: {
    openPopup (showDontShowBtn) {
      this.showDontShowBtn = showDontShowBtn
      $(this.$refs.modal).modal('show')
    },
    closePopup () {
      $(this.$refs.modal).modal('hide')
    },
    onDontShow (e) {
      this.$session('dontShowAgain', this.dontShowAgain)
    }
  }
}
</script>

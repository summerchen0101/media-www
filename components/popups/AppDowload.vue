<template>
  <transition name="fade">
    <div v-if="isVisible" class="modal indexModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <span class="close" @click="closePopup"><i class="fa fa-times" /></span>
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
            <div class="form-check check-box">
              <input id="exampleCheck1" v-model="dontShowAgain" type="checkbox" class="form-check-input" @change="onDontShow">
              <label class="form-check-label" for="exampleCheck1">不再显示</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppDownloadPopup',
  data () {
    return {
      androidUrl: 'https://apps99.cc/media/product/apk/release.apk',
      iosUrl: 'https://apps.apple.com/cn/app/hellorabbit/id1507918129',
      dontShowAgain: false,
      isVisible: false
    }
  },
  mounted () {
    if (!this.$session('dontShowAgain')) {
      this.openPopup()
    }
  },
  methods: {
    openPopup () {
      this.isVisible = true
      $('body').addClass('modal-info')
    },
    onDontShow (e) {
      this.$session('dontShowAgain', this.dontShowAgain)
    },
    closePopup () {
      this.isVisible = false
      $('body').removeClass('modal-info')
    }
  }
}
</script>

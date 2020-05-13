<template>
  <ValidationObserver v-slot="{ invalid, reset }">
    <form
      ref="form"
      class="form-horizontal login_dialog_form"
      @submit.prevent="onSubmit"
      @reset.prevent="reset"
    >
      <div class="form-group">
        手机号码:{{ registerData.phone }}
      </div>
      <ValidationProvider v-slot="v" rules="required" name="verifyCode">
        <div class="form-group">
          <!-- <label class="control-label">Company Name</label> -->
          <div class="flex-box">
            <input v-model="verifyCode" type="text" class="form-control" placeholder="请输入验证码">
            <div class="btn-box">
              <span v-if="lockSendBtn" class="btn btn-light">{{ counter }}s</span>
              <span v-else class="btn btn-primary" @click="onReSend">
                重发
              </span>
            </div>
          </div>
          <span class="text-danger">{{ v.errors[0] }}</span>
        </div>
      </ValidationProvider>

      <div class="modal-tips mt-2">
        <div v-if="showErrorMsg" class="text-yellow mt-2 ">
          <i class="fa fa-exclamation-circle" /> 验证码错误
        </div>
        <!-- <div class="text-red mt-2">
              <i class="fa fa-times-circle" /> 验证失败, 请重新取得验证码
            </div> -->
      </div>
      <div class="tips mt-2">
        重新取得验证码<br>
        <b class="text-red">30</b> 秒仍未收到简讯，请再点击一次按钮
      </div>
      <div class="form-group">
        <div class="dialog_form_btn">
          <button class="btn btn-primary nextBtn" type="submit" :disabled="invalid">
            送出
          </button>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'RegisterStep2',
  components: {},
  data () {
    return {
      verifyCode: '',
      lockSendBtn: false,
      defaultCounter: 30,
      counter: 30,
      showErrorMsg: false
    }
  },
  computed: {
    registerData () {
      return this.$store.getters['user/registerData']
    }
  },
  mounted () {
  },
  methods: {
    clearForm () {
      this.verifyCode = ''
      this.showErrorMsg = false
      this.$nextTick(() => {
        this.$refs.form && this.$refs.form.reset()
      })
    },
    async onReSend () {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('user/getVerificationCode', this.form)
      this.$nuxt.$loading.finish()
      this.lockSendBtn = true
      this.clearForm()
      this.countDown(this.defaultCounter)
    },
    countDown (initCounter) {
      if (initCounter) {
        this.counter = this.defaultCounter
      }
      if (this.counter > 0) {
        this.counter = this.counter - 1
        setTimeout(() => this.countDown(), 1000)
      } else {
        this.resetCount()
      }
    },
    resetCount () {
      this.counter = this.defaultCounter
      this.lockSendBtn = false
    },
    async onSubmit () {
      const res = await this.$store.dispatch('user/register', this.verifyCode)
      if (res.code === '0') {
        this.$bus.$emit('register/setStep', 'step3')
      } else {
        this.showErrorMsg = true
      }
    }
  }
}
</script>

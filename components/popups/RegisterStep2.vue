<template>
  <ValidationObserver v-slot="{ invalid, reset }">
    <form
      ref="form"
      class="form-horizontal login_dialog_form"
      @submit.prevent="onSubmit"
      @reset.prevent="reset"
    >
      <ValidationProvider v-slot="v" rules="required|captcha" name="captcha">
        <div class="form-group">
          手机号码:0912123456
        </div>
        <div class="form-group">
          <!-- <label class="control-label">Company Name</label> -->
          <div class="flex-box">
            <input v-model="captcha" type="text" class="form-control" placeholder="请输入验证码">
            <div class="btn-box">
              <span v-if="lockSendBtn" class="btn btn-light">{{ counter }}s</span>
              <span v-else class="btn btn-primary" @click="onReSend">
                重发
              </span>
            </div>
          </div>
          <span class="text-danger">{{ v.errors[0] }}</span>

          <div class="modal-tips mt-2">
            <!-- <div class="text-green">
                                        <i class="fa fa-check-circle"></i> 验证成功
                                    </div> -->
            <div class="text-yellow mt-2 ">
              <i class="fa fa-exclamation-circle" /> 验证码错误
            </div>
            <div class="text-red mt-2">
              <i class="fa fa-times-circle" /> 验证失败, 请重新取得验证码
            </div>
          </div>
          <div class="tips mt-2">
            重新取得验证码<br>
            <b class="text-red">30</b> 秒仍未收到简讯，请在点击一次按钮
          </div>
        </div>
      </ValidationProvider>
      <div class="form-group">
        <div class="dialog_form_btn">
          <button class="btn btn-primary nextBtn" type="submit">
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
      captcha: '',
      lockSendBtn: false,
      counter: 5
    }
  },
  mounted () {
    this.$bus.$on('register/clearForm', this.clearForm)
  },
  methods: {
    clearForm () {
      const vm = this
      vm.captcha = ''
      vm.$nextTick(() => {
        vm.$refs.form && vm.$refs.form.reset()
      })
    },
    onReSend () {
      this.lockSendBtn = true
      this.countDown()
    },
    countDown () {
      if (this.counter > 0) {
        this.counter = this.counter - 1
        setTimeout(this.countDown, 1000)
      } else {
        this.resetCount()
      }
    },
    resetCount () {
      this.counter = 5
      this.lockSendBtn = false
    },
    onSubmit () {
      this.$bus.$emit('registerStepChanged', 'step3')
    }
    // async onSubmit () {
    //   await this.$store.dispatch('user/register', this.form)
    // }
  }
}
</script>

<template>
  <div class="hidden">
    <div id="login_dialog">
      <div id="login_dialog_inner">
        <div class="login_dialog_title">
          <span><img src="/images/login_dialog.png" alt=""></span>
          <span>会员登入</span>
        </div>
        <ValidationObserver v-slot="{ invalid, reset }">
          <form ref="form" class="form-horizontal login_dialog_form" @reset.prevent="reset">
            <div class="form-group">
              <div class="col-xs-12">
                <ValidationProvider v-slot="v" rules="required|phone" name="phone">
                  <input
                    v-model="form.phone"
                    type="text"
                    class="form-control"
                    placeholder="帐号(手机号)"
                    @keyup.enter="onClickedLogin($event, invalid)"
                  >
                  <span class="text-danger">{{ v.errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="form-group">
              <div class="col-xs-12">
                <ValidationProvider v-slot="v" rules="required|pw" name="pw">
                  <input
                    v-model="form.pw"
                    type="password"
                    class="form-control"
                    placeholder="密码"
                    @keyup.enter="onClickedLogin($event, invalid)"
                  >
                  <span class="text-danger">{{ v.errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
            <div class="login_link login_link_forget">
            <!-- <a id="go_forgetPw">忘记密码</a> -->
            </div>
            <div class="form-group">
              <div class="dialog_form_btn">
                <a
                  href=""
                  class="btn btn-primary"
                  :disabled="invalid"
                  @click.prevent="onClickedLogin($event, invalid)"
                >
                  登入</a>
              </div>
            </div>
            <div v-if="$store.getters['site/allowRegister']" class="login_link login_link_account">
              没有帐号?
              <a href="" @click.prevent="openRegisterPopup">创建一个新帐号</a>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
function initForm () {
  return {
    phone: '',
    pw: ''
  }
}
export default {
  name: 'LoginPopup',
  components: {},
  data () {
    return {
      form: initForm()
    }
  },
  mounted () {
    this.$bus.$on('login/clearForm', this.clearForm)
  },
  methods: {
    clearForm () {
      const vm = this
      vm.form = initForm()
      vm.$nextTick(() => {
        vm.$refs.form && vm.$refs.form.reset()
      })
    },
    async onClickedLogin (e, invalid) {
      e.target.blur()
      if (invalid) { return }
      this.$nuxt.$loading.start()
      await this.$store.dispatch('user/login', this.form)
      this.$nuxt.$loading.finish()
      if (this.$utils.device !== 'web') {
        this.$bus.$emit('closeMobileMenu')
      }
    }
  }
}
</script>

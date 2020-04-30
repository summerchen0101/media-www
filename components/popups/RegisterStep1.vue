<template>
  <ValidationObserver v-slot="{ invalid, reset }">
    <form
      ref="form"
      class="form-horizontal login_dialog_form"
      @submit.prevent="onSubmit"
      @reset.prevent="reset"
    >
      <div class="form-group">
        <div class="col-xs-12">
          <ValidationProvider v-slot="v" rules="required|phone" name="phone">
            <input v-model="form.phone" type="text" class="form-control" placeholder="帐号(手机号)">
            <span class="text-danger">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <ValidationProvider v-slot="v" rules="required|pw" name="pw">
            <input v-model="form.pw" type="password" class="form-control" placeholder="密码(4-16位字母、数字和符号)">
            <span class="text-danger">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-12">
          <ValidationProvider v-slot="v" rules="required|match:@pw" name="pw_confirm">
            <input v-model="form.pw_c" type="password" class="form-control" placeholder="确认密码">
            <span class="text-danger">{{ v.errors[0] }}</span>
          </ValidationProvider>
        </div>
      </div>
      <div class="registered_dialog_txt">
        点击创建帐户，即表示同意相关
        <nuxt-link :to="{name: 'other-service', query: {t: new Date().getTime()}}">
          服务条款
        </nuxt-link>
      </div>
      <div class="form-group">
        <div class="dialog_form_btn">
          <button type="submit" class="btn btn-primary" :disabled="invalid">
            下一步
          </button>
        </div>
      </div>
      <!-- <div class="login_link login_link_account">
              已有帐号?
              <a href="" @click.prevent="openLoginPopup">立即登入</a>
            </div> -->
    </form>
  </ValidationObserver>
</template>

<script>
function initForm () {
  return {
    phone: '',
    pw: '',
    pw_c: ''
  }
}
export default {
  name: 'RegisterStep1',
  components: {},
  data () {
    return {
      form: initForm()
    }
  },
  mounted () {
    this.$bus.$on('register/clearForm', this.clearForm)
  },
  methods: {
    clearForm () {
      const vm = this
      vm.form = initForm()
      vm.$nextTick(() => {
        vm.$refs.form && vm.$refs.form.reset()
      })
    },
    async onSubmit () {
      this.$nuxt.$loading.start()
      this.$store.commit('user/saveRegisterData', _.cloneDeep(this.form))
      const res = await this.$store.dispatch('user/getVerificationCode')
      if (res.code === '0') {
        this.$bus.$emit('register/setStep', 'step2')
      }
      this.$nuxt.$loading.finish()
    }
  }
}
</script>

<template>
  <div class="hidden">
    <div id="register_dialog">
      <div id="registered_dialog_inner">
        <div class="login_dialog_title">
          <span><img src="/images/login_dialog.png" alt=""></span>
          <span>会员注册</span>
        </div>
        <component :is="stepComp" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPopup',
  components: {
    step1: () => import('./RegisterStep1'),
    step2: () => import('./RegisterStep2'),
    step3: () => import('./RegisterStep3')
  },
  data () {
    return {
      stepComp: 'step1'
    }
  },
  created () {
    this.$bus.$on('register/setStep', this.onRegisterStepChanged)
  },
  methods: {
    onRegisterStepChanged (stepComp) {
      this.stepComp = stepComp
    }
  }
}
</script>

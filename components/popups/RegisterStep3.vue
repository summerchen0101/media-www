<template>
  <ValidationObserver>
    <form
      ref="form"
      class="form-horizontal login_dialog_form"
    >
      <div class="form-group text-center">
        <h3 class="text-green">
          <i class="fa fa-check-circle" /> 注册成功
        </h3>
      </div>
      <div class="form-group">
        <div class="dialog_form_btn">
          <a class="btn btn-success" type="submit" @click="onBack">
            回首页
          </a>
        </div>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'RegisterStep3',
  mounted () {
  },
  methods: {
    onBack () {
      $.fancybox.close()
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<template>
  <div class="error">
    <div class="error-code">
      <div class="error-img">
        <img src="/images/error/error.png" alt="">
      </div>
      <div class="error-message">
        <h4>站台尚未开放</h4>
        <h5>请稍后再试，如造成您的不便，敬请见谅。</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  async fetch ({ app, store, redirect }) {
    await store.dispatch('site/getInfo')
    if (store.getters['site/status']) {
      redirect('/')
    }
  },
  mounted () {
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/error.css' }
    ]
  }
}
</script>

<template>
  <div>
    <h1>LOGs TEST</h1>
    <pre>{{ data }}</pre>
    <!-- <pre>{{ $store.state.log.host }}</pre>
    <pre>{{ $store.getters['log/logs'] }}</pre> -->
  </div>
</template>

<script>
export default {
  name: 'Logs',
  async asyncData ({ app, store, redirect, $api }) {
    const res = await $api.ad.getAds()
    return {
      data: res.data
    }
  },
  mounted () {
    this.$api.ad.getAds().then(res => console.log(res))
    // this.$api2.user.getProfile().then(res => console.log(res))
    this.$api.movie.getDetail().then(res => console.log(res))
  }
}
</script>

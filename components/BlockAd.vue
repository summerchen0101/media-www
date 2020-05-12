<template>
  <div v-if="ad" class="ad-box mb-20">
    <a
      v-if="ad.imgUrl"
      :title="ad.title"
      class="item"
      :href="ad.url"
      :target="ad.newWin ? '_blank' : '_self'"
      :style="`background-image: url('${resolveResource(ad.imgUrl)}');`"
      @click="ad.url ? $api.ad.getAdInfo({id: ad.id}) : null"
    />
  </div>
</template>
<script>
export default {
  props: {
    ad: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

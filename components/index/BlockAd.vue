<template>
  <div v-if="ad" class="ad-box mb-20">
    <a
      :title="ad.title"
      class="item"
      :href="ad.url"
      :target="ad.is_blank == 'Y' ? '_blank' : '_self'"
      @click="ad.url ? $api.getAdInfo(null, {params: {id: ad.id}}) : null"
    >
      <img :src="ad.image_url">
    </a>
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

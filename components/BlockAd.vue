<template>
  <div v-if="ad" class="ad-box mb-20">
    <a
      :title="ad.title"
      class="item"
      :href="ad.url"
      :target="ad.is_blank == 'Y' ? '_blank' : '_self'"
      :style="`background-image: url(${ad.image_url});`"
      @click="ad.url ? $api.getAdInfo({params: {id: ad.id}}) : null"
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

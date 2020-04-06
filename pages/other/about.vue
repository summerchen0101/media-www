<template>
  <div class="company_right col-xs-12 col-sm-9 col-md-9">
    <div class="company_title">
      <i class="icon-youtube-logo" /><span>{{ info.title }}</span>
    </div>
    <div class="company_content" v-html="info.contents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  layout: 'other',
  components: {
  },
  async fetch ({ store, redirect }) {
    await store.dispatch('site/getSubPageContent')
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      info: 'site/about'
    })
  },
  mounted () {
  },
  head () {
    return {
    }
  }
}
</script>

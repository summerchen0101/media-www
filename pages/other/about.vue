<template>
  <div v-if="data" class="company_right col-xs-12 col-sm-9 col-md-9">
    <div class="company_title">
      <i class="icon-youtube-logo" /><span>{{ data.title }}</span>
    </div>
    <div class="company_content" v-html="data.contents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'About',
  layout: 'other',
  scrollToTop: true,
  components: {
  },
  async asyncData ({ store, redirect }) {
    await store.dispatch('site/getInfo')
    return {}
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      info: 'site/info'
    }),
    data () {
      return this.info.About
    }
  },
  mounted () {
  },
  head () {
    return {
    }
  }
}
</script>

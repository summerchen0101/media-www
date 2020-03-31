<template>
  <div class="company_right col-xs-12 col-sm-9 col-md-9">
    <div class="company_title">
      <i class="icon-article" /><span>{{ info.title }}</span>
    </div>
    <div class="company_content" v-html="info.contents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Privacy',
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
      info: 'site/privacy'
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

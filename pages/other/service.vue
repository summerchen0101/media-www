<template>
  <div class="company_right col-xs-12 col-sm-9 col-md-9">
    <div class="company_title">
      <i class="icon-customer-support" /><span>{{ info.title }}</span>
    </div>
    <div class="company_content" v-html="info.contents" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Service',
  layout: 'other',
  components: {
  },
  async fetch ({ store, redirect }) {
    await store.dispatch('site/getSubPageContent')
  },
  computed: {
    ...mapGetters({
      info: 'site/service'
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

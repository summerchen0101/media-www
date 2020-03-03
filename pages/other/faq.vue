<template>
  <div class="company_right col-xs-12 col-sm-9 col-md-9">
    <div class="company_title">
      <i class="icon-discuss-issue" /><span>常见问题</span>
    </div>
    <div class="company_content">
      <div class="qa_container">
        <div v-for="(qa, i) in $store.getters['site/faq']" :key="i" class="qa_box">
          <a><span class="q_icon">Q.</span>{{ qa.title }}</a>
          <div class="qa_content" v-html="qa.contents" />
        </div>
      </div>
      <paginator :paginator="paginator" @change="onPageChange" />
    </div>
  </div>
</template>

<script>
const faqPaginator = {
  page: 1,
  perpage: 20
}
export default {
  name: 'Faq',
  watchQuery: true,
  components: {},
  async asyncData ({ app, query, store, redirect }) {
    await store.dispatch('site/getFaq', faqPaginator)
    await store.dispatch('site/getFaqTotal', faqPaginator)
    return {
      paginator: app.$utils.toPaginator({
        ...faqPaginator,
        count: store.state.site.faqTotal
      })
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    jqFix()
  },
  methods: {
    async onPageChange (page) {
      this.$nuxt.$loading.start()
      await this.$store.dispatch('site/getFaq', { ...faqPaginator, page })
      await this.$store.dispatch('site/getFaqTotal', { ...faqPaginator, page })
      this.paginator = this.$utils.toPaginator({
        ...faqPaginator,
        page,
        count: this.$store.state.site.faqTotal
      })
      this.$nuxt.$loading.finish()
    }
  },
  head () {
    return {
      link: [{ rel: 'stylesheet', href: '/css/qa.css' }],
      script: [{ type: 'text/javascript', src: '/js/script.js' }]
    }
  }
}

function jqFix () {
  /* qa */
  $('.qa_box > a').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this)
        .siblings('.qa_content')
        .slideUp(200)
      $('.qa_box > a i')
        .removeClass('fa-caret-down')
        .addClass('fa-caret-down')
    } else {
      $('.qa_box > a i')
        .removeClass('fa-caret-down')
        .addClass('fa-caret-down')
      $(this)
        .find('i')
        .removeClass('fa-caret-down')
      $('.qa_box > a').removeClass('active')
      $(this).addClass('active')
      $('.qa_content').slideUp(200)
      $(this)
        .siblings('.qa_content')
        .slideDown(200)
    }
  })
}
</script>

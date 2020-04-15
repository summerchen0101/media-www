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
      <paginator :page="page" :perpage="perpage" :count="count" @change="onPageChange" />
    </div>
  </div>
</template>

<script>
const perpage = 10
export default {
  name: 'Faq',
  layout: 'other',
  components: {},
  async asyncData ({ app, query, store, redirect }) {
    const page = 1
    await store.dispatch('site/getFaq', { page, perpage })
    await store.dispatch('site/getFaqTotal', { page, perpage })
    return {
      page,
      perpage,
      count: store.getters['site/faqTotal']
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
      await this.$store.dispatch('site/getFaq', { perpage, page })
      await this.$store.dispatch('site/getFaqTotal', { perpage, page })
      this.page = page
      this.count = this.$store.getters['site/faqTotal']
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

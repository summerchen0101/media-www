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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  components: {},
  async fetch ({ app, store, redirect }) {
    const res = await app.$api.getFaq()
    if (res.code === '0') {
      store.commit('site/gotFaq', res.data)
    }
  },
  data () {
    return {}
  },
  mounted () {
    jqFix()
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

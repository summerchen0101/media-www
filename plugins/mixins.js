import Vue from 'vue'
Vue.mixin({
  methods: {
    openLoginPopup () {
      const vm = this
      $.fancybox.open({
        href: '#login_dialog',
        type: 'inline',
        wrapCSS: 'fancybox-login',
        padding: 40,
        width: 800,
        maxWidth: '100%',
        helpers: {
          overlay: {
            css: {
              background: 'rgba(0,0,0,.8)'
            }
          }
        },
        afterClose () {
          vm.$bus.$emit('login/clearForm')
        }
      })
    },
    openRegisterPopup () {
      const vm = this
      $.fancybox.open({
        href: '#register_dialog',
        type: 'inline',
        wrapCSS: 'fancybox-login',
        padding: 40,
        width: 800,
        maxWidth: '100%',
        helpers: {
          overlay: {
            css: {
              background: 'rgba(0,0,0,.8)'
            }
          }
        },
        afterClose () {
          vm.$bus.$emit('register/clearForm')
        }
      })
    },
    openSearchPopup () {
      $('#searchModal').modal('show')
      $('#searchModal').on('hidden.bs.modal', (e) => {
        this.$bus.$emit('search/clearForm')
      })
    },
    onPageChange (page) {
      this.$router.push({ name: this.$route.name, query: { ...this.$route.query, p: page } })
    },
    resolveResource (url) {
      return url.search('http') > -1 ? url : `//resource.${process.env.BASE_URL}/${url}`
    }
  }

})

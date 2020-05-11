<template>
  <div>
    <div class="menuBg" />
    <!--nav start-->
    <Header />
    <Login />
    <Register />
    <Search />
    <div id="wrapper">
      <div id="page-content-wrapper">
        <!--banner start-->
        <div class="page_banner" style="background-image: url('/images/page_banner.jpg');" />
        <!--banner end-->
        <div class="page_container">
          <div class="container">
            <div class="row">
              <SideMenu />
              <nuxt />
            </div>
          <!--page_content_s end-->
          </div>
        </div>
        <!--page_container end-->
        <Footer />
        <MobileFooterMenu />
        <ScrollTop />
        <APPDownloadPopup />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/components/popups/Login'
import Register from '@/components/popups/Register'
import Search from '@/components/popups/Search'
import SideMenu from '@/components/MemberSideMenu'
export default {
  name: 'UserLayout',
  middleware: ['auth', 'authWithRedirect'],
  layout: 'main',
  components: {
    Header,
    Login,
    Register,
    Search,
    SideMenu
  },
  data () {
    return {}
  },
  mounted () {

  },
  head () {
    return {
      link: [{ rel: 'stylesheet', href: '/css/member.css' }]
    }
  }
}
</script>

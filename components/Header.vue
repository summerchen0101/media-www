<template>
  <header class="header_box">
    <div class="container">
      <div class="navbar-hamburger">
        <span /> <span /> <span />
      </div>
      <nuxt-link class="logo" :to="{name: 'index'}">
        <img src="/images/logo.png" alt="">
      </nuxt-link>
      <div class="show-mb mb-nav">
        <a class="search" href="" @click.prevent="openSearchPopup">
          <span><i class="fa fa-search" /></span>
        </a>
      </div>
      <nav class="menuBar">
        <div class="nav-content">
          <WebMenu />
          <MobileMenu />
        </div>
      </nav>
      <!--nav end-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    WebMenu: () => import('@/components/WebMenu'),
    MobileMenu: () => import('@/components/MobileMenu')
  },
  mounted () {

  }
}
</script>

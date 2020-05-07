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
      <Menu />
      <!--nav end-->
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  components: {
    Menu: () => import('./HeaderMenu')
    // MobileHeaderMenu: () => import('./MobileHeaderMenu')
  },
  mounted () {

  }
}
</script>

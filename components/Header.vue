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
        <a v-if="!$auth.loggedIn" href="" class="login" @click.prevent="openLoginPopup">
          <span><i class="icon-user" /></span>
        </a>
        <div v-show="$auth.loggedIn" class="login-img show-mb">
          <a>
            <b class="img" style="background-image:url(/images/member/member_bigImg.jpg)" />
            <i class="arr-icon fa fa-caret-down" />
          </a>
          <div id="menu-dropdown" class="dropdown">
            <nuxt-link :to="{name: 'user-record'}">
              观看纪录
            </nuxt-link>
            <nuxt-link :to="{name: 'user-favorite'}">
              我的收藏
            </nuxt-link>
            <nuxt-link :to="{name: 'user-profile'}">
              帐号设置
            </nuxt-link>
            <a href="" @click.prevent="$store.dispatch('user/logout')">登出</a>
          </div>
        </div>
        <nuxt-link to="/" class="homeBtn">
          <span><i class="fa fa-home" /></span>
        </nuxt-link>
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
  },
  mounted () {
    $('.login-img.show-mb').click(function () {
      $('#menu-dropdown').fadeToggle()
    })
  }
}
</script>

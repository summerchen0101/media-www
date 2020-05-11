<template>
  <div>
    <div class="user-info">
      <span id="menu-close" @click="hideMobileMenu">×</span>
      <div class="img">
        <img src="/images/ic_usericon.png" alt="">
      </div>
      <div v-if="$auth.loggedIn" class="link name">
        <span>{{ $auth.user.account }}</span>
        <a href="" @click.prevent="$store.dispatch('user/logout') && hideMobileMenu()">登出</a>
      </div>
      <div v-else class="link">
        会员
        <a @click.prevent="openLoginPopup"><span>登入</span></a>
        /
        <a @click.prevent="openRegisterPopup"><span>註冊</span></a>
      </div>
      <div class="login-link">
        <a href="" @click.prevent="routerAuthDetector({name: 'user-record'})">
          <i class="fa fa-clock-o" />观看纪录
        </a>
        <a href="" @click.prevent="routerAuthDetector({name: 'user-favorite'})">
          <i class="fa fa-star" />收藏影片
        </a>
      </div>
    </div>
    <ul class="menu_list mb-menu-list">
      <li
        v-for="(c,i) in cates"
        :key="i"
        :class="{active: $route.params.category === c.code}"
      >
        <nuxt-link :to="{name: 'tv-filter-category', params: {category: c.code}}">
          {{ c.label }}
        </nuxt-link>
      </li>
      <li :class="{active: $route.name === 'tv-rank'}">
        <nuxt-link :to="{name: 'tv-rank'}">
          排行榜
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: 'other-about'}">
          关于抖影
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { Category } from '@/lib/constants'
export default {
  data () {
    return {
      cates: Category
    }
  },
  watch: {
    $route: 'hideMobileMenu'
  },
  mounted () {
    this.$bus.$on('closeMobileMenu', this.hideMobileMenu)
    $('.navbar-hamburger').click(this.toggleMobileMenu)
    $('.menuBg').click(this.toggleMobileMenu)
    const wdth = $(window).width()
    const leftPos = ($('.menuBar').width() - $('.container').width())
    $('.nav-content li ul.dropdown').width(wdth).css({ left: -leftPos / 2, 'padding-left': leftPos / 2 })
  },
  methods: {
    toggleMobileMenu () {
      $('.nav-content').toggleClass('visible')
      $('.menuBg').toggleClass('cover-bg')
      $('body').toggleClass('menu_open_body')
    },
    hideMobileMenu () {
      $('.nav-content').removeClass('visible')
      $('.menuBg').removeClass('cover-bg')
      $('body').removeClass('menu_open_body')
    }
  }
}
</script>

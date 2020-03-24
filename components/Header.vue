<template>
  <header class="header_box">
    <div class="container">
      <div class="navbar-hamburger">
        <span /> <span /> <span />
      </div>
      <nuxt-link class="logo" :to="{name: 'index'}">
        <img src="/images/logo.png" alt="">
      </nuxt-link>
      <nav class="menuBar">
        <div class="nav-content">
          <ul class="menu_list">
            <li v-for="(c,i) in cates" :key="i">
              <nuxt-link :to="{name: 'tv-filter-category', params: {category: c.code}, query: {t: new Date().getTime()}}">
                <span><i :class="c.icon" /></span><span>{{ c.label }}</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-rank'}">
                <span><i class="icon-ranking" /></span><span>排行</span>
              </nuxt-link>
            </li>
            <li>
              <a href="" @click.prevent="openSearchPopup">
                <span><i class="fa fa-search" /></span><span>搜寻</span>
              </a>
            </li>
            <li v-if="$auth.loggedIn" class="login-img show-pc">
              <a>
                <b class="img" style="background-image:url(/images/member/member_bigImg.jpg)" />
                <span>会员</span>
                <i class="arr-icon fa fa-caret-down" />
              </a>
              <div class="dropdown">
                <nuxt-link :to="{name: 'user-record'}">
                  观看纪录
                </nuxt-link>
                <nuxt-link :to="{name: 'user-favorite'}">
                  我的收藏
                </nuxt-link>
                <nuxt-link :to="{name: 'user-message'}">
                  我的消息
                </nuxt-link>
                <nuxt-link :to="{name: 'user-profile'}">
                  帐号设置
                </nuxt-link>
                <a href="" @click.prevent="$store.dispatch('user/logout')">登出</a>
              </div>
            </li>
            <li v-else>
              <a href="" @click.prevent="openLoginPopup"><span><i class="icon-user" /></span><span>登入</span></a>
            </li>
          </ul><a />
        </div>
        <li class="login-img show-mb">
          <a v-if="$auth.loggedIn">
            <b class="img" style="background-image:url(/images/member/member_bigImg.jpg)" />
            <i class="arr-icon fa fa-caret-down" />
          </a>
          <div class="dropdown">
            <nuxt-link :to="{name: 'user-record'}">
              观看纪录
            </nuxt-link>
            <nuxt-link :to="{name: 'user-favorite'}">
              我的收藏
            </nuxt-link>
            <nuxt-link :to="{name: 'user-message'}">
              我的消息
            </nuxt-link>
            <nuxt-link :to="{name: 'user-profile'}">
              帐号设置
            </nuxt-link>
            <a href="" @click.prevent="$store.dispatch('user/logout')">登出</a>
          </div>
        </li>
      </nav>
      <!--nav end-->
    </div>
  </header>
</template>

<script>
import { Category } from '@/lib/constants'
export default {
  name: 'Header',
  components: {},
  data () {
    return {
      cates: Category
    }
  },
  watch: {
    $route () {
      if ($('.nav-content').hasClass('visible')) {
        this.toggleMobileMenu()
      }
    }
  },
  mounted () {
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
    }
  }
}
</script>

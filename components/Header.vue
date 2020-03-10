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
            <li>
              <nuxt-link :to="{name: 'tv-filter-category', params: {category: 'drama'}}">
                <span><i class="icon-television" /></span><span>戏剧</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-filter-category', params: {category: 'movie'}}">
                <span><i class="icon-movie-symbol-of-video-camera" /></span><span>电影</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-filter-category', params: {category: 'anime'}}">
                <span><i class="icon-cartoons-character-with-big-eyes" /></span><span>动漫</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-filter-category', params: {category: 'variety'}}">
                <span><i class="icon-karaoke-microphone-icon" /></span><span>综艺</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link :to="{name: 'tv-rank'}">
                <span><i class="icon-ranking" /></span><span>排行</span>
              </nuxt-link>
            </li>
            <li>
              <a data-toggle="modal" data-target="#searchModal"><span><i class="fa fa-search" /></span><span>搜寻</span></a>
            </li>
            <li v-if="isLogin" class="login-img show-pc">
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
              <a class="fancybox" href="#login_dialog"><span><i class="icon-user" /></span><span>登入</span></a>
            </li>
          </ul><a />
        </div>
        <li class="login-img show-mb">
          <a v-if="isLogin">
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
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {},
  computed: {
    ...mapGetters({
      isLogin: 'user/login'
    })
  },
  mounted () {}
}
</script>

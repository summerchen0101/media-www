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
              <nuxt-link :to="{name: 'tv-filter-category', params: {category: c.code}}">
                <span><i :class="c.icon" /></span><span>{{ c.label }}</span>
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
import { Category } from '@/lib/constants/Category'
export default {
  name: 'Header',
  components: {},
  data () {
    return {
      cates: Category
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/login'
    })
  },
  mounted () {}
}
</script>

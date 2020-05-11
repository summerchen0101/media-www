<template>
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
      <UserDropdownMenu />
    </li>
    <li v-else>
      <a href="" @click.prevent="openLoginPopup"><span><i class="icon-user" /></span><span>登入</span></a>
    </li>
  </ul>
</template>

<script>
import { Category } from '@/lib/constants'
export default {
  components: {
    UserDropdownMenu: () => import('@/components/UserDropdownMenu')
  },
  data () {
    return {
      cates: Category
    }
  }
}
</script>

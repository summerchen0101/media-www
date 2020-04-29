<template>
  <div class="dropdown">
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
</template>

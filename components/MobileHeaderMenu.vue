<template>
  <div class="show-mb mb-nav" :class="{'mb-nav-login': $auth.loggedIn}">
    <a v-if="!$auth.loggedIn" href="" class="login" @click.prevent="openLoginPopup">
      <span><i class="icon-user" /></span>
    </a>
    <div v-else class="login-img show-mb" @click="toggleDropdown">
      <a>
        <b class="img" style="background-image:url(/images/member/member_bigImg.jpg)" />
        <i class="arr-icon fa fa-caret-down" />
      </a>
      <UserDropdownMenu ref="dropdown" />
    </div>
    <nuxt-link to="/" class="homeBtn">
      <span><i class="fa fa-home" /></span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'MobileHeaderMenu',
  components: {
    UserDropdownMenu: () => import('@/components/UserDropdownMenu')
  },
  methods: {
    toggleDropdown () {
      $(this.$refs.dropdown.$el).toggle()
    }
  }
}
</script>

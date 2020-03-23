<template>
  <div class="user-act">
    <div class="collect-box">
      <a href="" :class="{active: isActive}" @click.prevent="handleFavClicked">
        <i class="fa fa-heart" /><b>收藏</b>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      category: this.$route.query.category,
      id: this.$route.query.id,
      isActive: false
    }
  },
  mounted () {
    this.isActive = this.$store.getters[`${this.category}/isFav`]
  },
  methods: {
    async handleFavClicked () {
      if (!this.$auth.loggedIn) {
        this.openLoginPopup()
        return
      }
      if (!this.isActive) {
        await this.$store.dispatch(`${this.category}/addToFav`, this.id)
      } else {
        await this.$store.dispatch(`${this.category}/removeFromFav`, this.id)
      }
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss">
.user-act .collect-box a.active {
  color: red
}
</style>

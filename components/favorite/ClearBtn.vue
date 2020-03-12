<template>
  <a href="#" class="member_clearBtn" @click.prevent="handleClearFavorite">
    <i class="fa fa-trash-o" />清除所有收藏
  </a>
</template>

<script>
export default {
  name: 'ClearBtn',
  data () {
    return {
      category: this.$route.query.category
    }
  },
  methods: {
    handleClearFavorite () {
      return this.category
        ? this.$store.dispatch('favorite/removeByCategory', this.category)
        : this.$store.dispatch('favorite/removeAll')
    }
  }
}
</script>

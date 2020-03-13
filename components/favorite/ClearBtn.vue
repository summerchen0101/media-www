<template>
  <a href="#" class="member_clearBtn" @click.prevent="handleClearFavorite">
    <i class="fa fa-trash-o" />清除所有收藏
  </a>
</template>

<script>
export default {
  name: 'ClearBtn',
  props: {
    count: {
      type: Number,
      default: () => 0
    },
    category: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    handleClearFavorite () {
      if (!this.count.length) {
        this.$alert('尚无收藏纪录')
        return
      }
      if (this.category) {
        return this.category
          ? this.$store.dispatch('favorite/removeByCategory', this.category)
          : this.$store.dispatch('favorite/removeAll')
      }
    }
  }
}
</script>

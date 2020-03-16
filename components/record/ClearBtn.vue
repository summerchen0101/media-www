<template>
  <a href="#" class="member_clearBtn" @click.prevent="handleClearRecord">
    <i class="fa fa-trash-o" />清除所有纪录
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
    async  handleClearRecord () {
      if (!this.count) {
        this.$alert('尚无影片纪录')
        return
      }
      if (this.category) {
        await this.$store.dispatch('record/removeByCategory', this.category)
      } else {
        await this.$store.dispatch('record/removeAll')
      }
    }
  }
}
</script>

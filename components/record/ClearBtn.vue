<template>
  <a href="#" class="member_clearBtn" @click.prevent="handleClearRecord">
    <i class="fa fa-trash-o" />清除所有纪录
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
    handleClearRecord () {
      return this.category
        ? this.$store.dispatch('record/removeByCategory', this.category)
        : this.$store.dispatch('record/removeAll')
    }
  }
}
</script>

export default {
  methods: {
    onPageChange (page) {
      this.$router.push({ name: this.$route.name, query: { ...this.$route.query, p: page } })
    }
  }

}

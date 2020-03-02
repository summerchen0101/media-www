export default {
  async getInfo ({ commit }) {
    const res = await this.$api.getSiteInfo()
    if (res.code === '0') {
      commit('gotInfo', res.data)
    }
  },
  async getFaq ({ commit }) {
    const res = await this.$api.getFaq()
    if (res.code === '0') {
      commit('gotFaq', res.data)
    }
  }
}

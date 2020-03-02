export default {
  async getHost ({ commit }) {
    const res = await this.$nFetch.post('session/host')
    if (res.data.ok) {
      commit('gotHost', res.data.host)
    }
  }
}

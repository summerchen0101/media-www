export default {
  async getInfo ({ commit }) {
    const res = await this.$api.getSiteInfo()
    if (res.code === '0') {
      commit('gotInfo', res.data)
    }
  },
  async getFaq ({ commit }, _d = {}) {
    const data = {
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api.getFaq(null, { params: data })
    if (res.code === '0') {
      commit('gotFaq', res.data)
    }
  },
  async getFaqTotal ({ commit }, _d = {}) {
    const data = {
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api.getFaqTotal(null, { params: data })
    if (res.code === '0') {
      commit('gotFaqTotal', res.data)
    }
  }
}

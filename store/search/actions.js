export default {
  async getTopList ({ commit }, { category, count = 10 }) {
    const res = await this.$api[category].getTopList({ top_count: count })
    if (res.code === '0') {
      commit('gotTopList', res.data)
    }
  },
  async getList ({ commit, dispatch }, _d) {
    const data = {
      type: _d.category,
      keyword: _d.keyword,
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api.search.getList(data)
    if (res.code === '0') {
      commit('gotList', res.data)
    }
  },
  async getTotal ({ commit }, _d) {
    const data = {
      type: _d.category,
      keyword: _d.keyword
    }
    const res = await this.$api.search.getTotal(data)
    if (res.code === '0') {
      commit('gotTotal', res.data)
    }
  }
}

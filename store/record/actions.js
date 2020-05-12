const apiModule = 'record'
export default {
  async getTypes ({ commit }) {
    const res = await this.$api[apiModule].getTypes()
    if (res.code === '0') {
      commit('gotTypes', res.data)
    }
  },
  async getList ({ commit }, _d = {}) {
    const query = {
      type: _d.category,
      page: _d.page || 1,
      perpage: _d.perpage
    }
    const res = await this.$api[apiModule].getList(query)
    if (res.code === '0') {
      commit('gotList', res.data)
    }
  },
  async getTotal ({ commit }, _d = {}) {
    const query = {
      type: _d.category
    }
    const res = await this.$api[apiModule].getTotal(query)
    if (res.code === '0') {
      commit('gotTotal', res.data)
    }
  },
  async removeAll ({ commit }) {
    const res = await this.$api[apiModule].delete()
    if (res.code === '0') {
      commit('removeAll')
      this.$router.app.$message('刪除成功')
    }
  },
  async removeById ({ commit, dispatch }, id) {
    const res = await this.$api[apiModule].delete({ id })
    if (res.code === '0') {
      commit('removeById', id)
      this.$router.app.$message('刪除成功')
    }
  },
  async removeByCategory ({ commit, dispatch }, category) {
    const res = await this.$api[apiModule].delete({ type: category })
    if (res.code === '0') {
      commit('removeAll')
      this.$router.app.$message('刪除成功')
    }
  },
  async add ({ commit, rootState }, id) {
    if (!rootState.auth.loggedIn) { return }
    await this.$api[apiModule].add({ id })
  }
}

const apiModule = 'favorite'
export default {
  async getList ({ commit }, _d = {}) {
    const params = {
      media_type: _d.category,
      page: _d.page || 1,
      perpage: _d.perpage
    }
    const res = await this.$api[apiModule].getList({ params })
    if (res.code === '0') {
      commit('gotList', res.data)
    }
  },
  async getTotal ({ commit }, _d) {
    const params = {
      media_type: _d.category
    }
    const res = await this.$api[apiModule].getTotal({ params })
    if (res.code === '0') {
      commit('gotTotal', res.data)
    }
  },
  async removeAll ({ commit }) {
    const res = await this.$api[apiModule].removeAll()
    if (res.code === '0') {
      commit('removeAll')
      this.$router.app.$message('刪除成功')
    }
  },
  async removeById ({ commit }, id) {
    const res = await this.$api[apiModule].remove({ params: { id } })
    if (res.code === '0') {
      commit('removeById', id)
      this.$router.app.$message('刪除成功')
    }
  },
  async removeByCategory ({ commit }, category) {
    const res = await this.$api[apiModule].removeAll({ params: { media_type: category } })
    if (res.code === '0') {
      commit('removeAll')
      this.$router.app.$message('刪除成功')
    }
  }
}

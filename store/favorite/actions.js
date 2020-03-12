const apiModule = 'FAVORITE'
export default {
  async getList ({ commit }) {
    const res = await this.$api[apiModule].getList()
    if (res.code === '0') {
      commit('gotList', res.data)
    }
  },
  async getTotal ({ commit }) {
    const res = await this.$api[apiModule].getTotal()
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
      commit('removeByCategory', category)
      this.$router.app.$message('刪除成功')
    }
  }
}

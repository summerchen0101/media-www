const apiModule = 'RECORD'
export default {
  async getTypes ({ commit }) {
    const res = await this.$api[apiModule].getTypes()
    if (res.code === '0') {
      commit('gotTypes', res.data)
    }
  },
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
    const res = await this.$api[apiModule].delete()
    if (res.code === '0') {
      commit('removeAll')
      this.$router.app.$message('刪除成功')
    }
  },
  async removeById ({ commit }, id) {
    const res = await this.$api[apiModule].delete({ params: { id } })
    if (res.code === '0') {
      commit('removeById', id)
      this.$router.app.$message('刪除成功')
    }
  },
  async removeByCategory ({ commit }, category) {
    const res = await this.$api[apiModule].delete({ params: { type: category } })
    if (res.code === '0') {
      commit('removeByCategory', category)
      this.$router.app.$message('刪除成功')
    }
  },
  async add ({ commit }, id) {
    await this.$api[apiModule].add({ id })
  }
}

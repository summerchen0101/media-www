const apiModule = 'DRAMA'
export default {
  async getLatestList ({ commit }) {
    const res = await this.$api[apiModule].getLatestList()
    if (res.code === '0') {
      commit('gotLatestList', res.data)
    }
  },
  async getTopList ({ commit }) {
    const res = await this.$api[apiModule].getTopList()
    if (res.code === '0') {
      commit('gotTopList', res.data)
    }
  }
}

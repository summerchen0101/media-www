const apiModule = 'MOVIE'
export default {
  async getLatestList ({ commit }) {
    const res = await this.$api[apiModule].getLatestList()
    if (res.code === '0') {
      commit('gotLatestList', res.data)
    }
  }
}

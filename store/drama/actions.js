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
  },
  async addToFav ({ commit }, id) {
    const res = await this.$api[apiModule].addToFav({ media_id: id })
    if (res.code === '0') {
      this.$router.app.$alert('收藏成功', { type: 'success' })
    }
  },
  async removeFromFav ({ commit }, id) {
    const res = await this.$api[apiModule].removeFromFav({ media_id: id })
    if (res.code === '0') {
      this.$router.app.$alert('已移除收藏', { type: 'success' })
    }
  }
}

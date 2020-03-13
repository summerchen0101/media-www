const apiModule = 'VARIETY'
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
  addToFav ({ commit }, id) {
    return this.$api[apiModule].addToFav({ media_id: id })
  },
  removeFromFav ({ commit }, id) {
    return this.$api[apiModule].removeFromFav({ media_id: id })
  },
  addComment ({ commit }, { id, comment }) {
    const data = {
      media_id: id,
      contents: comment
    }
    return this.$api[apiModule].addComment(data)
  }
}

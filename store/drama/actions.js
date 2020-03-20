const apiModule = 'DRAMA'
export default {
  async getOptions ({ commit }) {
    const res = await this.$api[apiModule].getOptions()
    if (res.code === '0') {
      commit('gotOptions', res.data)
    }
  },
  async getList ({ commit }, _d) {
    const data = {
      sort: _d.orderBy,
      years_id: _d.year,
      region_id: _d.region,
      language_id: _d.lang,
      genres_ids: _d.type,
      episode_status: _d.status,
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api[apiModule].getList({ params: data })
    if (res.code === '0') {
      commit('gotList', res.data)
    }
  },
  async getTotal ({ commit }, _d) {
    const data = {
      sort: _d.orderBy,
      years_id: _d.year,
      region_id: _d.region,
      language_id: _d.lang,
      genres_ids: _d.type,
      episode_status: _d.status
    }
    const res = await this.$api[apiModule].getTotal({ params: data })
    if (res.code === '0') {
      commit('gotTotal', res.data)
    }
  },
  async getLatestList ({ commit }) {
    const res = await this.$api[apiModule].getLatestList()
    if (res.code === '0') {
      commit('gotLatestList', res.data)
    }
  },

  async getTopList ({ commit }, num = 10) {
    const res = await this.$api[apiModule].getTopList({ params: { top_count: num } })
    if (res.code === '0') {
      commit('gotTopList', res.data)
    }
  },
  async getRankList ({ commit }, num = 10) {
    const res = await this.$api[apiModule].getTopList({ params: { top_count: num } })
    if (res.code === '0') {
      commit('gotRankList', res.data)
    }
  },
  async getDetail ({ commit }, id) {
    const res = await this.$api[apiModule].getDetail({ params: { id } })
    if (res.code === '0') {
      commit('gotDetail', res.data)
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

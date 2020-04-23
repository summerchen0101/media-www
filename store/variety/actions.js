import { perpage as commentPerpage } from '@/components/tv/video-detail/VideoComment.vue'
const apiModule = 'variety'
export default {
  async getLatestList ({ commit }) {
    const res = await this.$api[apiModule].getLatestList()
    if (res.code === '0') {
      commit('gotLatestList', res.data)
    }
  },

  async getTopList ({ commit }, num = 10) {
    const res = await this.$api[apiModule].getTopList({ top_count: num })
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
  },
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
      genres_id: _d.genres,
      episode_status: _d.status,
      page: _d.page,
      perpage: _d.perpage
    }
    const res = await this.$api[apiModule].getList(data)
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
      genres_id: _d.genres,
      episode_status: _d.status
    }
    const res = await this.$api[apiModule].getTotal(data)
    if (res.code === '0') {
      commit('gotTotal', res.data)
    }
  },
  async getDetail ({ commit }, id) {
    const res = await this.$api[apiModule].getDetail({ id })
    if (res.code === '0') {
      commit('gotDetail', res.data)
    }
  },
  async getCommentList ({ commit }, _d) {
    const data = {
      variety_id: _d.id,
      page: _d.page || 1,
      perpage: commentPerpage
    }
    const res = await this.$api[apiModule].getCommentList(data)
    if (res.code === '0') {
      commit('gotCommentList', res.data.comments)
    }
  },
  async getCommentTotal ({ commit }, _d) {
    const data = {
      variety_id: _d.id
    }
    const res = await this.$api[apiModule].getCommentTotal(data)
    if (res.code === '0') {
      commit('gotCommentTotal', res.data)
    }
  },
  async getSources ({ commit }, id) {
    const res = await this.$api[apiModule].getSources({ id })
    if (res.code === '0') {
      commit('gotSources', res.data)
    }
  },
  async getFavStatus ({ commit, rootState }, id) {
    if (!rootState.auth.loggedIn) { return }
    const res = await this.$api[apiModule].getFavStatus({ id })
    if (res.code === '0') {
      commit('gotFavStatus', res.data)
    }
  }
}

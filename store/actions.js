export default {
  async nuxtServerInit ({ commit, dispatch }, { req }) {
    await dispatch('log/getHost')
    if (req.session && req.session.auth) {
      commit('user/switchLoginStatus', true)
      commit('user/gotToken', req.session.auth)
    }
  }
}

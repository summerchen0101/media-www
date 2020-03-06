export default {
  nuxtServerInit ({ commit, dispatch }, { req }) {
    if (req.session && req.session.token) {
      commit('user/switchLoginStatus', true)
      commit('user/gotToken', req.session.token)
    }
  }
}

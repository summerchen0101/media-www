export default {
  nuxtServerInit ({ commit, dispatch }) {
    dispatch('site/getInfo')
  }
}

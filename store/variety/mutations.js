export default {
  gotLatestList (state, list) {
    state.latestList = list
  },
  gotTopList (state, list) {
    state.topList = list
  },
  gotList (state, list) {
    state.list = list
  },
  gotTotal (state, total) {
    state.total = total
  },
  gotOptions (state, options) {
    state.region = options.region
    state.year = options.years
    state.genres = options.genres
    state.lang = options.language
    state.status = options.episode_status
  },
  gotDetail (state, detail) {
    state.detail = detail
  },
  gotCommentList (state, list) {
    state.commentList = list
  },
  gotCommentTotal (state, total) {
    state.commentTotal = total
  },
  gotSources (state, list) {
    state.sources = list
  },
  gotFavStatus (state, boolean) {
    state.isFav = boolean
  }
}

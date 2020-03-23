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
  gotRegionOptions (state, options) {
    state.region = options
    // state.year = options.years
    // state.genres = options.genres
    // state.lang = options.language
  },
  gotYearOptions (state, options) {
    state.year = options
  },
  gotGenresOptions (state, options) {
    state.genres = options
  },
  gotStatusOptions (state, options) {
    state.status = options
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

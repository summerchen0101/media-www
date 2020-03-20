export default {
  gotLatestList (state, list) {
    state.latestList = list
  },
  gotTopList (state, list) {
    state.topList = list
  },
  gotRankList (state, list) {
    state.rankList = list
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
  }
}

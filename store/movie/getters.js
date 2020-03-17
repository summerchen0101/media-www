export default {
  latestList: state => _(state.latestList)
    .map(t => ({
      id: t.id,
      imgUrl: t.image_url,
      title: t.name,
      episodeCount: t.episodes_count,
      episodeStatus: t.episode_status
    }))
    .value(),
  latest: (state, getters) => {
    return getters.latestList[0] || {}
  },
  filterTypes: state => state.filterTypes,
  orderTypes: state => state.orderTypes,
  region: state => state.region,
  lang: state => state.lang,
  genres: state => state.genres,
  year: state => state.year,
  topList: state => state.topList.map(t => ({
    id: t.id,
    title: t.name
  }))
}

export default {
  latestList: state => state.latestList.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeCount: t.episodes_count,
    episodeStatus: t.episode_status
  })),
  filterTypes: state => state.filterTypes,
  orderTypes: state => state.orderTypes,
  region: state => state.region,
  lang: state => state.lang,
  genres: state => state.genres,
  year: state => state.year,
  topList: state => state.topList.map(t => ({
    id: t.id,
    title: t.title
  }))
}

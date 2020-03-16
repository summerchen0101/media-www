export default {
  latestList: state => _(state.latestList)
    .map(t => ({
      id: t.id,
      imgUrl: t.image_url,
      title: t.title,
      episodeCount: t.episodes_count,
      episodeStatus: t.episode_status
    }))
    .take(6)
    .value(),
  region: state => state.region,
  lang: state => state.lang,
  genres: state => state.genres,
  year: state => state.year,
  topList: state => state.topList.map(t => ({
    id: t.id,
    title: t.title
  }))
}

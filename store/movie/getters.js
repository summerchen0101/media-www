export default {
  latest: (state) => {
    const t = state.latestList[0] || {}
    return {
      id: t.id,
      imgUrl: t.image_url,
      title: t.name,
      episodeCount: t.episodes_count,
      episodeStatus: t.episode_status
    }
  },
  latestList: state => _(state.latestList)
    .drop(1)
    .take(8)
    .map(t => ({
      id: t.id,
      imgUrl: t.image_url,
      title: t.name,
      episodeCount: t.episodes_count,
      episodeStatus: t.episode_status
    }))
    .value(),
  region: state => state.region,
  lang: state => state.lang,
  genres: state => state.genres,
  year: state => state.year
}

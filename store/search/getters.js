export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeStatus: t.episode_status,
    latestEpisode: t.episodes[t.episodes.length - 1].title
  })),
  total: state => +state.total,
  topList: state => state.topList.map(t => ({
    id: t.id,
    title: t.title || t.name
  }))
}

export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    episodeStatus: t.episode_status,
    latestEpisode: _.orderBy(t.episodes, 'opening_time', 'desc')[0].title
  })),
  total: state => +state.total
}

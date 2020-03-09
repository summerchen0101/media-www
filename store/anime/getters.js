export default {
  latestList: state => state.latestList.map(t => ({
    id: t.id,
    imgUrl: t.image_url,
    title: t.title,
    episodeCount: t.episodes_count,
    episodeStatus: t.episode_status
  }))
}

export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    mediaID: t.media.media_id,
    imgUrl: t.media.media.image_path,
    title: t.media.media.name || t.media.media.title,
    category: t.media.media_type,
    episode: t.media.title
  })),
  total: state => +state.total
}

export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.media.image_path,
    title: t.media.name || t.media.title,
    category: t.media_type
  })),
  total: state => +state.total
}

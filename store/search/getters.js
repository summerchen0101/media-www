export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.image_path,
    title: t.title,
    category: t.media_type
  })),
  total: state => +state.total
}

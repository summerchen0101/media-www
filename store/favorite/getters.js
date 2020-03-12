import { Category } from '@/lib/constants/Category'
export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.media.media.image_url,
    title: t.media.media.name || t.media.media.title,
    category: t.media.media_type,
    episode: t.media.title
  })),
  listByCategory: (state, getters) => {
    return Category.reduce((obj, next) => {
      obj[next.code] = getters.list.filter(t => t.category === next.code)
      return obj
    }, {})
  },
  total: state => state.total
}

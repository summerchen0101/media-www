import { Category } from '@/lib/constants/Category'
export default {
  types: state => state.types,
  list: state => state.list.map(t => ({
    id: t.id,
    imgUrl: t.media.image_url,
    title: t.media.name || t.media.title,
    category: t.media_type
  })),
  listByCategory: (state, getters) => {
    return Category.reduce((obj, next) => {
      obj[next.code] = getters.list.filter(t => t.category === next.code)
      return obj
    }, {})
  },
  total: state => state.total
}

export default {
  gotTypes (state, types) {
    state.types = types
  },
  gotList (state, list) {
    state.list = list
  },
  gotTotal (state, total) {
    state.total = total
  },
  removeAll (state) {
    state.list = []
  },
  removeByCategory (state, category) {
    state.list = state.list.filter(t => t.media.media_type !== category)
  },
  removeById (state, id) {
    state.list = state.list.filter(t => t.id !== id)
  }
}
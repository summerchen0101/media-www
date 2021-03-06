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
    state.total = 0
  },
  removeById (state, id) {
    state.list = state.list.filter(t => t.id !== id)
    state.total = state.total - 1
  }
}

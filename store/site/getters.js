export default {
  info: state => state.info
    .filter(t => t.status === 'Y')
    .reduce((obj, next) => {
      obj[next.code] = next
      return obj
    }, {}),
  faq: (state) => {
    return state.faq
      .filter(t => t.status === 'Y')
  },
  faqTotal: (state) => {
    return parseInt(state.faqTotal)
  }

}

export default ({ app, store, $axios, redirect, isDev }, inject) => {
  const toPaginator = function ({ page, perpage, count }) {
    return {
      page,
      perpage,
      count,
      totalPages: Math.ceil(count / perpage)
    }
  }
  inject('utils', {
    toPaginator
  })
}

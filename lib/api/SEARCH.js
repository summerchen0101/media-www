export const SEARCH = {
  namespaced: true,
  baseUrl: 'client/classified/search',
  apis: {
    getList: {
      method: 'get',
      url: ''
    },
    getTotal: {
      method: 'get',
      url: 'total'
    },
    getCategorys: {
      method: 'get',
      url: 'type'
    }
  }
}

export const VARIETY = {
  namespaced: true,
  baseUrl: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'variety/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/variety/topTen'
    }
  }
}

export const DRAMA = {
  namespaced: true,
  baseUrl: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'drama/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/drama/topTen'
    }
  }
}

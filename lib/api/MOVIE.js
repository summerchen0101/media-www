export const MOVIE = {
  namespaced: true,
  baseUrl: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'movie/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/movie/topTen'
    }
  }
}

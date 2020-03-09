export const MOVIE = {
  namespaced: true,
  baseUrl: 'movie',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'latest'
    }
  }
}

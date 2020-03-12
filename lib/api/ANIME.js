export const ANIME = {
  namespaced: true,
  baseUrl: '',
  apis: {
    getLatestList: {
      method: 'get',
      url: 'anime/latest'
    },
    getTopList: {
      method: 'get',
      url: 'client/anime/topTen'
    }
  }
}

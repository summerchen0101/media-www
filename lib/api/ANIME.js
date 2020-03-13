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
    },
    addToFav: {
      method: 'post',
      url: 'anime/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'anime/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'anime/comment'
    }
  }
}

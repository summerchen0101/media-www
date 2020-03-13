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
    },
    addToFav: {
      method: 'post',
      url: 'movie/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'movie/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'movie/comment'
    }
  }
}

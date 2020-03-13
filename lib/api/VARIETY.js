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
    },
    addToFav: {
      method: 'post',
      url: 'variety/favorite/add'
    },
    removeFromFav: {
      method: 'post',
      url: 'variety/favorite/remove'
    },
    addComment: {
      method: 'post',
      url: 'variety/comment'
    }
  }
}

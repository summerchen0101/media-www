export const RECORD = {
  namespaced: true,
  baseUrl: 'client/viewed/episode',
  apis: {
    getTypes: {
      method: 'get',
      url: 'type'
    },
    getList: {
      method: 'get',
      url: ''
    },
    getTotal: {
      method: 'get',
      url: 'total'
    },
    delete: {
      method: 'delete',
      url: ''
    },
    add: {
      method: 'post',
      url: ''
    }
  }

}

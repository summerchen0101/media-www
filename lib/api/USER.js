export const USER = {
  namespaced: false,
  baseUrl: 'client/profile',
  apis: {
    getProfile: {
      method: 'get',
      url: ''
    },
    updateProfile: {
      method: 'put',
      url: ''
    },
    updatePw: {
      method: 'put',
      url: 'password'
    }
  }

}

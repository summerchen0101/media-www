export const USER = {
  namespaced: false,
  baseUrl: '',
  apis: {
    register: {
      method: 'post',
      url: '/client/register'
    },
    getProfile: {
      method: 'get',
      url: '/client/profile'
    },
    updateProfile: {
      method: 'put',
      url: '/client/profile'
    },
    updatePw: {
      method: 'put',
      url: '/client/profile/password'
    }
  }

}

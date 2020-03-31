export const SITE = {
  namespaced: false,
  baseUrl: '',
  apis: {
    getSubPageContent: {
      method: 'get',
      url: 'client/layout'
    },
    getSiteInfo: {
      method: 'get',
      url: 'branch/client/info'
    },
    getFaq: {
      method: 'get',
      url: 'faq/client'
    },
    getFaqTotal: {
      method: 'get',
      url: 'faq/client/total'
    }
  }
}

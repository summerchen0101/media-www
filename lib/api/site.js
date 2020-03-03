export const SITE = {
  namespaced: false,
  apis: {
    getSiteInfo: {
      method: 'get',
      url: 'client/layout'
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

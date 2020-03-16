
import path from 'path'
import * as apiModules from '@/lib/api'

export default ({ app, $axios }, inject) => {
  function makeApis (module) {
    return Object.keys(module.apis).reduce((obj, key) => {
      const { method, url } = module.apis[key]
      const _url = path.join(module.baseUrl, url)
      obj[key] = (...args) => app.$axios[method](_url, ...args)
      return obj
    }, {})
  }

  const apis = Object.keys(apiModules)
    .reduce((obj, moduleName) => {
      const module = apiModules[moduleName]
      if (module.namespaced) {
        obj[moduleName] = makeApis(module)
      } else {
        obj = Object.assign({}, obj, makeApis(module))
      }
      return obj
    }, {})
  inject('api', apis)
}

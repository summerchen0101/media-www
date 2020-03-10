import * as consts from '@/lib/constants'

export default ({ app, store, $axios }, inject) => {
  inject('enum', (cate, code) => {
    const i = consts[cate] && consts[cate].findIndex(t => t.code === code)
    return i > -1 ? consts[cate][i].label : '?'
  })
}

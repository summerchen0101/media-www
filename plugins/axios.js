import { errCodes, errMsgs } from '@/lib/err'

export default ({ app, store, route, $axios, redirect, error, req }) => {
  $axios.onRequest((config) => {
    config.url = config.url.replace(/\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val) => {
      if (config.data) {
        return config.data[val]
      } else {
        return config.params[val]
      }
    })
    if (process.server) {
      config.headers.referer = `${process.env.PROTOCOL}://${process.env.SSR_TARGET_BRANCH || req.headers.host}`
    }
    return config
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })
  $axios.onError((error) => {
    if (!error.response) {
      throw new Error(error)
    }
    const status = error.response.status
    if (status === 401) {
      store.dispatch('user/logout')
      if (route.name !== 'index') {
        redirect('/')
      }
    } else if (status === 403) {
      error({ statusCode: 403, message: 'ohoh403' })
    } else if (status === 429) {
      error({ statusCode: 429, message: '請求次數過多' })
    } else if (status === 500) {
      error({ statusCode: 500, message: 'ohoh500' })
    }
  })
  // axios回傳值調整
  $axios.onResponse((res) => {
    store.commit('log/addLog', res)
    if (res.data.code !== '0') {
      handleErrorCode(app, store, res)
    }
    return res.data
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

function handleErrorCode (app, store, { data, config }) {
  /**
   * 以回傳的msg去mapping
   */
  const msg = data.data && data.data.msg
  const mapMsg = errMsgs[msg]
  /**
   * 以回傳的code去mapping
   */
  const url = config.url
  const code = data.code[0] || 'default'
  const mapCode = (errCodes[code] && errCodes[code][url]) || errCodes[code]
  /**
   * 以msg的為主，其次以code判斷
   */
  app.router.app.$alert(mapMsg || mapCode || '未定义错误')
}

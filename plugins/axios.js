import { errCodes } from '@/lib/errCode/index'

export default ({ app, store, route, $axios, redirect, error, req }) => {
  $axios.onRequest((config) => {
    const requestConfig = {
      ...config,
      url: config.url.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val) => config.data[val])
    }
    if (process.server) {
      requestConfig.headers.Referer = `${process.env.PROTOCOL}://${req.headers.host}`
    }
    return requestConfig
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })
  $axios.onError((error) => {
    const status = error.response.status
    if (status === 401) {
      store.dispatch('user/logout')
      if (route.name !== 'index') {
        redirect('/')
      }
    } else if (status === 403) {
      error({ statusCode: 403, message: 'ohoh403' })
    } else if (status === 500) {
      error({ statusCode: 500, message: 'ohoh500' })
    }
    store.commit('log/addLog', error.response)
    handleErrorCode(app, store, error.response)
  })
  // axios回傳值調整
  $axios.onResponse((res) => {
    return res.data
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })
}

function handleErrorCode (app, store, { data, config }) {
  const resCode = data.code
  // const resMsg = data.data && data.data.msg
  const url = config.url
  if (Array.isArray(resCode)) {
    const code = resCode[0]
    // 有錯誤碼的對應路徑就以其為主
    const msg = (errCodes[code] && errCodes[code][url]) || errCodes[code] || errCodes.default
    app.router.app.$alert(msg)
  }
}

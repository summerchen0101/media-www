import { errCodes } from '@/lib/errCode/index'

export default ({ app, store, route, $axios, redirect, error, req }, inject) => {
  const baseUrl = {
    normal: `${process.env.PROTOCOL}://${process.env.PHP_API_BASE_URL}`,
    node: `${process.env.PROTOCOL}://${process.env.NODE_API_BASE_URL}`
  }
  const makeAxiosInstance = (baseURL) => {
    const axiosInstance = $axios.create({
      baseURL,
      validateStatus (status) {
        return true
      }
    })
    axiosInstance.onRequest((config) => {
      const requestConfig = {
        ...config,
        url: config.url.replace(/\$\{\s*([$#@\-\d\w]+)\s*\}/gim, (v, val) => config.data[val]),
        headers: {
          Authorization: `Bearer ${process.server ? req.session.token : store.state.user.token}`
        }
      }
      if (process.server) {
        requestConfig.headers.Referer = `${process.env.PROTOCOL}://${req.headers.host}`
      }
      return requestConfig
    }, (error) => {
      console.log(error)
      return Promise.reject(error)
    })
    // axios回傳值調整
    axiosInstance.onResponse((res) => {
      const status = res.status
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
      store.commit('log/addLog', res)
      handleErrorCode(app, store, res)
      return res.data
    }, (error) => {
      console.log(error)
      return Promise.reject(error)
    })
    return axiosInstance
  }
  inject('fetch', makeAxiosInstance(baseUrl.normal))
  inject('nFetch', makeAxiosInstance(baseUrl.node))
}

function handleErrorCode (app, store, { data, config }) {
  const resCode = data.code
  // const resMsg = data.data && data.data.msg
  const url = config.url
  if (Array.isArray(resCode)) {
    const code = resCode[0]
    // 有錯誤碼的對應路徑就以其為主
    const msg = (errCodes[code] && errCodes[code][url]) || errCodes[code] || errCodes.default
    if (code === '00001-1' && url === 'session/logout') {
      app.router.push({ name: 'index' })
      store.dispatch('user/clear')
    }
    app.router.app.$alert(msg)
  }
}

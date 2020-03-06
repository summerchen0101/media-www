export default ({ app, store, $axios, redirect, isDev, req }, inject) => {
  const baseURL = isDev
    ? `${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`
    : `${process.env.PROTOCOL}://${process.env.NODE_API_BASE_URL}`
  const nodeInstance = $axios.create({
    baseURL
  })

  nodeInstance.onRequest((config) => {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${process.server ? req.session.token : store.state.user.token}`,
        Referer: process.server ? `${process.env.PROTOCOL}://${req.headers.host}` : undefined
      }
    }
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })

  nodeInstance.onResponse((res) => {
    return res.data
  }, (error) => {
    console.log(error)
    return Promise.reject(error)
  })
  inject('nFetch', nodeInstance)
}

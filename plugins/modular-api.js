import ApiHub, { ErrorHandler } from 'modular-api'
// import axios from 'axios'
import apiModules from '@/lib/apis'

const errConfig = {
  templateKey: 'code',
  path: 'data.code',
  silentValue: ['0', 0],
  map: require('@/lib/err/errCodes'),
  defaultMsg: '錯誤發生',
  handleMsg: (msg, code) => {
    console.log(msg, code)
  }
}

export default (ctx, inject) => {
  if (process.server) {
    ctx.$axios.setHeader('referer', `${process.env.PROTOCOL}://${process.env.SSR_TARGET_BRANCH || ctx.req.headers.host}`)
  }

  const ApiHubInstance = ApiHub.bind(ctx.$axios)
  ApiHubInstance.onResponse((res) => {
    ErrorHandler.register(res, errConfig)
    return res.data
  })
  ApiHubInstance.onResponseError((err) => {
    ctx.app.router.app.$alert(err)
  })
  // ApiHubInstance.onResponse((res) => {
  //   console.log(res)
  // })

  ApiHubInstance.registerMultiModule(apiModules)
  ctx.$api = ApiHubInstance.getModules()
  inject('api', ctx.$api)
}

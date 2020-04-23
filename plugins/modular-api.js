import ApiHub from 'modular-api'
// import axios from 'axios'
import errMap from '@/lib/err/errMap'
import statusMap from '@/lib/err/statusMap'
import apiModules from '@/lib/apis'

export default (ctx, inject) => {
  const errHandlerConfig = {
    validCode: ['0'],
    defaultMsg: '錯誤發生 ({code})',
    errMap,
    statusMap
  }
  if (process.server) {
    ctx.$axios.setHeader('referer', `${process.env.PROTOCOL}://${process.env.SSR_TARGET_BRANCH || ctx.req.headers.host}`)
  }

  const ApiHubInstance = ApiHub.bind(ctx.$axios)
  ApiHubInstance.registerErrHandler(errHandlerConfig)
  ApiHubInstance.onResponse((res) => {
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

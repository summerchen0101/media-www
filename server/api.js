import express from 'express'
import bodyParser from 'body-parser'
import rq from 'request-promise'
const baseUrl = `${process.env.PROTOCOL}://${process.env.PHP_API_BASE_URL}`
// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

router.use(bodyParser())
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})
router.use((req, res, next) => {
  req.fetch = function (path) {
    const options = {
      method: req.method,
      body: req.method === 'POST' ? req.body : undefined,
      uri: baseUrl + path,
      headers: {
        Authorization: req.headers.authorization,
        Referer: req.headers.referer,
        'User-Agent': req.headers['user-agent']
      },
      json: true
    }
    return rq(options)
  }
  next()
})

router.post('/login', (req, res) => {
  return req.fetch('/passport/member/login')
    .then((apiRes) => {
      if (apiRes.code === '0') {
        req.session.token = apiRes.data.access_token
      }
      res.json(apiRes)
    })
})

router.get('/logout', (req, res) => {
  return req.fetch('/client/logout')
    .then((apiRes) => {
      delete req.session.token
      res.json(apiRes)
    })
})

// Export the server middleware
export default {
  path: '/session',
  handler: router
}

export default {
  addLog (state, _res) {
    state.logs = state.logs.concat({
      url: _res.config.url,
      client: process.client,
      response: _res.data,
      request: Object.keys(_res.config)
        .reduce((obj, next) => {
          if (['number', 'string'].includes(typeof _res.config[next])) {
            obj[next] = _res.config[next]
          }
          return obj
        }, {})
    })
  }
}

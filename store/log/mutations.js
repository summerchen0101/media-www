export default {
  addLog (state, _res) {
    const config = _res.config
    state.logs = state.logs.concat({
      url: config.url,
      method: config.method,
      baseURL: config.baseURL,
      Referer: config.headers.Referer,
      client: process.client,
      response: _res.data,
      request: {
        headers: config.headers,
        params: config.params,
        data: config.data,
        timeout: config.timeout
      }
    })
  }
}

export default {
  addLog (state, _res) {
    state.logs = state.logs.concat({
      url: _res.config.url,
      client: process.client,
      response: _res.data,
      request: _res.config
    })
  }
}

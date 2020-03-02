export default {
  logs: state => state.logs.map((log) => {
    // delete log.request
    return log
  })
}

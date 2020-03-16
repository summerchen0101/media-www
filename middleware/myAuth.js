export default function ({ store, redirect, req }) {
  if (process.server) {
    store.state.user.token = req.session.token
  }
  if (store.state.user.token) {
    store.dispatch('user/getProfile')
  } else {
    redirect('/')
    this.$alert('請重新登入')
  }
}

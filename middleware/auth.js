export default function ({ store, redirect, req }) {
  if (process.server) {
    store.state.user.token = req.session.token
  }
  if (!store.state.user.token) {
    redirect('/')
  }
}

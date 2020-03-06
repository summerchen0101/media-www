export default function ({ store, redirect, req }) {
  if (process.server) {
    // req.session.token = store.state.user.token
    console.log('auth.js', req.session)
  }
}

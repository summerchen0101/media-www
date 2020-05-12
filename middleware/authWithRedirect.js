export default async function ({ app, store, redirect, query, $auth }) {
  try {
    await $auth.fetchUser()
  } catch (err) {
    redirect('/')
  }
}

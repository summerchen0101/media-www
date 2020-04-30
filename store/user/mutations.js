export default {
  gotProfile (state, _d) {
    state.profile = Object.assign({}, state.profile, {
      account: _d.account,
      phone: _d.phone,
      email: _d.mail,
      id: _d.id
    })
  },
  saveRegisterData (state, _d) {
    state.registerData = _d
  }
}

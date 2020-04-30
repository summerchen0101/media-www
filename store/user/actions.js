export default {
  async login ({ commit, dispatch }, _d) {
    const data = {
      username: _d.phone,
      password: _d.pw,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      device: this.$utils.device,
      grant_type: 'password'
    }
    const res = await this.$auth.loginWith('local', { data })
    if (res.code === '0') {
      await this.$auth.fetchUser()
      $.fancybox.close()
      this.$router.push(this.$router.app.$route.fullPath)
    }
  },
  async logout ({ commit, dispatch }) {
    await this.$auth.logout('local')
    this.$router.push('/')
  },
  register ({ commit, dispatch, state }, verifyCode) {
    const _d = state.registerData
    const data = {
      account: _d.phone,
      password: _d.pw,
      password_confirmation: _d.pw_c,
      domain: this.$utils.host,
      verification_code: verifyCode
    }
    return this.$api.user.register(data)
  },
  getVerificationCode ({ commit, dispatch, state }) {
    const _d = state.registerData
    const data = {
      account: _d.phone,
      domain: this.$utils.host
    }
    return this.$api.user.getVerificationCode(data)
  },
  async getProfile ({ commit, dispatch }) {
    const res = await this.$api.user.getProfile()
    if (res.code === '0') {
      commit('gotProfile', res.data)
    }
  },
  async updateProfile ({ commit, dispatch }, _d) {
    const data = {
      email: _d.email,
      phone: _d.phone
    }
    const res = await this.$api.user.updateProfile(data)
    if (res.code === '0') {
      this.$router.app.$alert('资料更新成功', { type: 'success' })
    }
  },
  async updatePw ({ commit, dispatch }, _d) {
    const data = {
      old_password: _d.old_pw,
      password: _d.pw,
      password_confirmation: _d.pw_c
    }
    const res = await this.$api.user.updatePw(data)
    if (res.code === '0') {
      this.$router.app.$alert('密码更新成功', { type: 'success' })
    }
    return res
  }

}

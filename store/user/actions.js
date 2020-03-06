export default {
  clear ({ commit }) {
    commit('clearToken')
    commit('clearUser')
    commit('switchLoginStatus', false)
  },
  async checkLogin ({ commit, dispatch }) {
    const res = await this.$api.getProfile()
    if (res.code !== '0') {
      commit('switchLoginStatus', true)
    }
  },
  async login ({ commit, dispatch }, _d) {
    const data = {
      username: _d.account,
      password: _d.pw,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      device: this.$utils.device,
      grant_type: 'password'
    }
    const res = await this.$nFetch.post('session/login', data)
    if (res.code === '0') {
      $.fancybox.close()
      this.$router.push({ name: 'index' })
      commit('switchLoginStatus', true)
      commit('gotToken', res.data.access_token)
    }
  },
  async logout ({ commit, dispatch }) {
    const res = await this.$nFetch.get('session/logout')
    if (res.code === '0') {
      this.$router.push({ name: 'index' })
      this.$router.app.$alert('登出成功', { type: 'success' })
      dispatch('clear')
    }
  },
  async register ({ commit, dispatch }, _d) {
    const data = {
      account: _d.account,
      password: _d.pw,
      password_confirmation: _d.pw_c,
      domain: this.$utils.host
    }
    const res = await this.$api.register(data)
    if (res.code === '0') {
      $.fancybox.close()
      this.$router.push({ name: 'index' })
      this.$router.app.$alert('注册成功请重新登入', { type: 'success' })
    }
  },
  async getProfile ({ commit, dispatch }) {
    const res = await this.$api.getProfile()
    if (res.code === '0') {
      commit('gotProfile', res.data)
    }
  },
  async updateProfile ({ commit, dispatch }, _d) {
    const data = {
      email: _d.email,
      phone: _d.phone
    }
    const res = await this.$api.updateProfile(data)
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
    const res = await this.$api.updatePw(data)
    if (res.code === '0') {
      this.$router.app.$alert('密码更新成功', { type: 'success' })
    }
    return res
  }

}

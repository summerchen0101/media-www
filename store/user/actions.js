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
      device: _d.device,
      grant_type: 'password'
    }
    const res = await this.$api.login(data)
    if (res.code === '0') {
      $.fancybox.close()
      this.$router.push({ name: 'member-profile' })
      commit('switchLoginStatus', true)
      commit('gotToken', res.data.access_token)
      this.$axios.post('session/auth', { token: res.data.access_token })
    }
  },
  async logout ({ commit, dispatch }) {
    const res = await this.$api.logout()
    if (res.code === '0') {
      this.$router.push({ name: 'index' })
      this.$router.app.$alert('登出成功', { type: 'success' })
      commit('switchLoginStatus', false)
      commit('clearToken')
      this.$axios.delete('session/auth')
    }
  },
  async register ({ commit, dispatch }, _d) {
    const data = {
      account: _d.account,
      password: _d.pw,
      password_confirmation: _d.pw_c,
      domain: _d.domain
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
  async updateProfile ({ commit, dispatch }, profile) {
    const res = await this.$api.updateProfile(profile)
    if (res.code === '0') {
      this.$router.app.$alert('资料更新成功', { type: 'success' })
    }
  }

}

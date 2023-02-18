import { login, getUserInfo } from '@/api/svs'
import md5 from 'md5'
import store from 'storejs'
import { TOKEN } from '@/constant'
import router, { resetRouter } from '@/router'
import { setTimeStamp } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: store.get(TOKEN) || '',
    userInfo: {}
  }),
  actions: {
    // 登录
    loginDisP(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        })
          .then((data) => {
            router.push('/') // 跳转到layout页面
            this.commit('user/setToken', data.token)
            setTimeStamp() // 记录当前登录时间
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    // 获取用户信息
    async getUserInfoDisp(context) {
      const res = await getUserInfo()
      this.commit('user/setUserInfo', res)
      return res
    },
    // 用户主动退出登录
    userOut() {
      resetRouter()
      // 清空token
      this.commit('user/setToken', '')
      // 清空用户信息
      this.commit('user/setUserInfo', {})
      store.clear()
      router.push('login')
    }
  },
  mutations: {
    setToken(state, token) {
      // 将token存储到本地以及vuex中
      state.token = token
      store.set(TOKEN, token)
    },
    // 存储用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  }
}

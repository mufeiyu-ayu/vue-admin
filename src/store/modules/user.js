import { login } from '@/api/svs'
import md5 from 'md5'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      // 将token存储到本地以及vuex中
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    loginDisP(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(data => {
          router.push('/') // 跳转到layout页面
          this.commit('user/setToken', data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

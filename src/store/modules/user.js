import { login } from '@/api/sys'
import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      // 存储token 方便以后
      setItem(TOKEN, token)
    },
  },
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        // login 为登录请求动作
        login({
          username,
          password: md5(password),
        })
          .then((data) => {
            console.log(data)
            this.commit('user/setToken', data.token)
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
  },
}

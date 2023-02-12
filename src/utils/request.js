// HACK 配置axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'
import { isCheckTimeout } from './auth'
const service = axios.create({
  timeout: 3000,
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.icode = 'CCF5A8CD66311696'
    // 如果store存在token则在每次请求携带token
    if (store.getters.token) {
      config.headers.Authorization = `Bearer ${store.getters.token}`
      if (isCheckTimeout()) {
        store.dispatch('user/userOut')
        return Promise.reject(new Error('为了您的账户安全,请重新登录下账号'))
      }
    }
    return config
  },
  (err) => {
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  (response) => {
    // success:true=>请求成功  false=>请求失败
    const { message, success, data } = response.data
    if (success) {
      return data
    } else {
      ElMessage.error(message) // 提示错误信息
      return Promise.reject(new Error(message))
    }
  },
  (err) => {
    // 处理token问题
    // if (err.response && err.response.data && err.response.data.code === 401) {
    //   store.dispatch('user/userOut')
    // }
    if (err.response?.data?.code === 401) {
      store.dispatch('user/userOut')
    }
    ElMessage.error(err.message)
    return Promise.reject(err)
  }
)
export default service

// HACK 配置axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  timeout: 3000,
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    config.headers.icode = '7821F7BA543E7DA7'
    return config
  }
)

service.interceptors.response.use(response => {
  const { message, success, data } = response.data
  if (success) {
    return data
  } else {
    ElMessage.error(message) // 提示错误信息
    return Promise.reject(new Error(message))
  }
}, err => {
  ElMessage.error(err.message)
  return Promise.reject(err)
})
export default service

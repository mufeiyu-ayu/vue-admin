import axios from 'axios'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use((config) => {
  // 添加 icode
  config.headers.icode = '2BDEA06A377DE0CC'
  // 必须返回 config
  return config
})

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 需要判断当前请求是否成功
    if (success) {
      return data
    } else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
    //  成功返回解析后的结构
  },
  (error) => {
    ElMessage.error(error)
    return Promise.reject(error)
  }
)
export default service

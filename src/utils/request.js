// HACK 配置axios
import axios from 'axios'
const service = axios.create({
  timeout: 3000,
  baseURL: process.env.VUE_APP_BASE_API
})

service.interceptors.request.use(
  config => {
    config.headers.icode = '7821F7BA543E7DA7'
  }
)
export default service

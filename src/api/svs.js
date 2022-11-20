// HACK 登录请求动作
// 封装登录网络请求
import request from '@/utils/request'

// data参数
export const login = data => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

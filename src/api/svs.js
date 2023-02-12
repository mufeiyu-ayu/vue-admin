// HACK 登录请求动作
// 封装网络请求
import request from '@/utils/request'

// 登录请求函数
export const login = (data) => {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    url: '/sys/profile'
  })
}

// HACK 封装token时效性函数
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'

import store from 'storejs'
// 获取当前时间戳
export function getTimeStamp() {
  return store.get(TIME_STAMP)
}

// 设置时间戳
export function setTimeStamp() {
  store.set(TIME_STAMP, Date.now())
}

// 是否超时
export function isCheckTimeout() {
  // 当前时间戳
  const currentTime = Date.now()
  const timeStamp = getTimeStamp()
  // true :token失效
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}

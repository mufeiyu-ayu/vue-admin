import request from '@/utils/request'

export const feature1 = () => {
  return request({
    url: '/user/feature'
  })
}
export const chapter = () => {
  return request({
    url: '/user/chapter'
  })
}

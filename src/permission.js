// HACK 路由鉴权
import router from '@/router'
import store from '@/store'

// 白名单
const whiteList = ['/login']

// 前置守卫
router.beforeEach(async (to, from, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      // 1.用户已经登录,则不允许进入login登录页面 进入layout页面
      next('/')
    } else {
      // 不存在用户信息。则需要获取用户信息
      if (!store.getters.hasUserInfo) {
        await store.dispatch('user/getUserInfoDisp')
      }
      next()
    }
  } else {
    // 2.用户未登录，只运行进入白名单中的页面
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

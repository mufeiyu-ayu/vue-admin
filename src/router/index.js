import { createRouter, createWebHistory } from 'vue-router'
import { publicRoutes } from './routes'
import store from '@/store'
const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes
})
export const resetRouter = () => {
  if (store.getters.userInfo?.permission?.menus) {
    const menus = store.getters.userInfo.permission.menus
    menus.forEach((item) => {
      router.removeRoute(item)
    })
  }
}

export default router

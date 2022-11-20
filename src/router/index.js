import { createRouter, createWebHashHistory } from 'vue-router'

const publicRules = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRules
})

export default router

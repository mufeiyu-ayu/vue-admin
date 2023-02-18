import layout from '@/layout/index.vue'
import Article from './modules/Article'
import ArticleCreate from './modules/ArticleCreate'
import Permission from './modules/Permission'
import RoleList from './modules/RoleList'
import UserManage from './modules/UserManage'

/**
 * 公开路由表
 */
export const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    // 注意：带有路径“/”的记录中的组件“默认”是一个不返回 Promise 的函数
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401')
      }
    ]
  }
]

/**
 * 私有路由表
 */
/*
如果meta && meta.title && meta.icon ：则显示在 menu 菜单中，其中 title 为显示的内容，icon 为显示的图标
如果存在 children ：则以 el-sub-menu（子菜单） 展示
否则：则以 el-menu-item（菜单项） 展示
否则：不显示在 menu 菜单中
 */
export const privateRoutes = [
  Article,
  ArticleCreate,
  Permission,
  RoleList,
  UserManage
]

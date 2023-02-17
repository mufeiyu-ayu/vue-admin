import { publicRoutes } from '@/router/routes'
export default {
  namespaced: true,
  state: () => ({
    routes: publicRoutes
  }),
  mutations: {
    setRoutes(state, newRoutes) {
      state.route = [...publicRoutes, ...newRoutes]
    }
  },

  action: {
    /**
     * @description
     * @param {*} context
     * @param {*} menus 权限数据
     */
    // filterRoutes(context, menus) {
    // }
  }
}

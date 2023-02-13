<!-- HACK 临时侧边栏menu -->
<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activeMenu"
    :uniqueOpened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <!-- 子集 menu 菜单 -->
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/menuRouteRules'
import SidebarItem from './SidebarItem.vue'
const router = useRouter()
const route = useRoute()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// routes 符合sidebar的路由表
/* {path: '/user', redirect: '/user/manage', name: undefined, meta: {…}, aliasOf: undefined, …}
   {path: '/article', redirect: '/article/ranking', name: undefined, meta: {…}, aliasOf: undefined, …}
   {path: '/profile', name: 'profile', meta: {…}, children: Array(0), component: ƒ}
 */
// 默认激活
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

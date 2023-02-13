<!-- HACK 侧边栏 -->
<template>
  <div class="">
    <div class="logo-container">
      <el-avatar
        :size="44"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      ></el-avatar>
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">ayu-admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from '@/layout/Sidebar/SidebarMenu.vue'
import {} from 'vue'
</script>
<style scoped lang="scss">
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>

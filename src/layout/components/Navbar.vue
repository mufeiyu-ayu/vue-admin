<template>
  <div class="navbar">
    <Hamburger class="hamburger-container" />
    <Breakcrumb />
    <div class="right-menu">
      <HiderSearch />
      <screenfull></screenfull>
      <theme-select></theme-select>
      <LangSelect class="right-menu-item hover-effect" />
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="avatar"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item> {{ $t('msg.navBar.home') }} </el-dropdown-item>
            </router-link>
            <a target="_blank" href="#">
              <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click="userOut">
              {{ $t('msg.navBar.logout') }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import store from '@/store'
import Hamburger from '@/components/hamburger/index.vue'
import Breakcrumb from '@/components/Breakcrumb/index.vue'
import LangSelect from '@/components/LanguageSelect/index.vue'
import ThemeSelect from '@/components/ThemeSelect/index.vue'
import screenfull from '@/components/Screenfull/index.vue'
import HiderSearch from '@/components/HeaderSearch/index.vue'
// 渲染用户头像菜单
const avatar = computed(() => {
  return store.getters.userInfo.avatar
})

// 用户退出登录
const userOut = () => {
  store.dispatch('user/userOut')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    ::v-deep .right-menu-item {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 24px;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
      }
    }
    ::v-deep .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { isTags } from '@/utils/tags'
import { generateTitle } from '@/utils/i18n'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()

/**
 * 生成 title
 */
const getTitle = (route) => {
  let title = ''
  if (!route.meta) {
    // 处理无 meta 的路由

    const pathArr = route.path.split('/')
    title = pathArr[pathArr.length - 1]
  } else {
    title = generateTitle(route.meta.title)
    // console.log(title)
  }

  return title
}

/**
 * 监听路由变化
 */
const store = useStore()
watch(
  route,
  (to, from) => {
    if (!isTags(to.path)) return
    const { fullPath, meta, name, params, path, query } = to
    store.commit('app/addTagsViewList', {
      fullPath,
      meta,
      name,
      params,
      path,
      query,
      title: getTitle(to)
    })
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 93px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>

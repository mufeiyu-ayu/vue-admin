<!-- HACK navbar面包屑组件 -->
<template>
  <el-breadcrumb class="breakcrumb" separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breakcrumbData"
      :key="item.path"
    >
      <span class="no-redirect" v-if="index === breakcrumbData.length - 1">{{
        generateTitle(item.meta.title)
      }}</span>
      <span class="redirect" v-else @click="onLinkClick(item)">{{
        generateTitle(item.meta.title)
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n'
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const route = useRoute()
const router = useRouter()
const breakcrumbData = ref([])
// 生成数组数据
const breakcrumb = () => {
  // 当前路由的标准化路由记录

  breakcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
}

watch(
  route,
  () => {
    breakcrumb()
  },
  { immediate: true }
)
const onLinkClick = (item) => {
  router.push(item.path)
}
// 将来需要主题切换，所以hover的颜色我们设置为主色
const store = useStore()
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>

<style lang="scss" scoped>
.breakcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
    &:hover {
      color: v-bind(linkHoverColor);
    }
  }

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>

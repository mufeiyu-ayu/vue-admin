<template>
  <!-- 主题图标
  v-bind：https://v3.cn.vuejs.org/api/instance-properties.html#attrs -->
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon icon="change-theme" class="bg" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>

<script setup>
import SelectColor from '../ThemePicker/components/SelectColor.vue'
import { ref } from 'vue'

const selectColorVisible = ref(false)
const handleSetTheme = (command) => {
  selectColorVisible.value = true
}
</script>

<style lang="scss" scoped>
.bg {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
</style>

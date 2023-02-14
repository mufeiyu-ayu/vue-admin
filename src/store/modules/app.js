// HACK 处理侧边栏伸缩动画
import store from 'storejs'
import { LANG } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: store.get(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      store.set(LANG, lang)
      state.language = lang
    }
  }
}

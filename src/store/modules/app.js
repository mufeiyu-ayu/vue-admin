// HACK 处理侧边栏伸缩动画
import store from 'storejs'
import { LANG, TAGS_VIEW } from '@/constant'
export default {
  namespaced: true,
  state: () => ({
    sidebarOpened: true,
    language: store.get(LANG) || 'zh',
    tagsViewList: store.get(TAGS_VIEW) || []
  }),
  mutations: {
    triggerSidebarOpened(state) {
      state.sidebarOpened = !state.sidebarOpened
    },
    setLanguage(state, lang) {
      store.set(LANG, lang)
      state.language = lang
    },
    addTagsViewList(state, tag) {
      const isFind = state.tagsViewList.find((item) => item.path === tag.path)
      if (!isFind) {
        state.tagsViewList.push(tag)
        store.set(TAGS_VIEW, state.tagsViewList)
      }
    }
  }
}

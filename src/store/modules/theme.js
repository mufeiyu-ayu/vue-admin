import { MAIN_COLOR, DEFAULT_COLOR } from '@/constant'
import store from 'storejs'
export default {
  namespaced: true,
  state: () => ({
    mainColor: store.get(MAIN_COLOR) || DEFAULT_COLOR
  }),
  mutations: {
    /**
     * 设置主题色
     */
    setMainColor(state, newColor) {
      state.mainColor = newColor
      store.set(MAIN_COLOR, newColor)
    }
  }
}

import { createStore } from 'vuex'
import user from './modules/user.js'
export default createStore({
  modules: {
    user,
  },
})

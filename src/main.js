import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import './permission'
import i18n from './i18n'
// 导入全局样式
import './styles/index.scss'
// filter
import installFilter from '@/filter'

const app = createApp(App)
installFilter(app)

installIcons(app)
installElementPlus(app)
app.use(store).use(router).use(i18n).mount('#app')

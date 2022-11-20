import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import installIcons from '@/icons'
import './permission'
// 导入全局样式
import './styles/index.scss'

const app = createApp(App)
installIcons(app)
installElementPlus(app)
app.use(store).use(router).mount('#app')

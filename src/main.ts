import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './routes'
import '@unocss/reset/tailwind.css'
import './assets/style/index.css'
import 'uno.css'

/**
 * 解决tailwind的样式冲突
 */
const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')

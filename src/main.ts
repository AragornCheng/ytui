import './assets/main.css'
import './styles/index.css'

import { createApp } from 'vue'
import App from './App.vue'

import YtUI from './index'

const app = createApp(App)
app.use(YtUI)
app.mount('#app')

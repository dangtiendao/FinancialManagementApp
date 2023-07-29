import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routers from './routers'

// createApp(App).mount('#app')
createApp(App).use(routers).mount('#app')

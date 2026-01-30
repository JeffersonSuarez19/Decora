import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css' // ajusta si tu CSS está en otra ruta

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
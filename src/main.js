import { createApp } from 'vue'
import App from './App.vue'
import './styles/app.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')
App.use(AOS.init());

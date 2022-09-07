import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './routes/index';

createApp(App)
.use(router)
.mount('#app')

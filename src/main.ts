import { createApp } from 'vue'
import './style.css'
import './main.scss'
import App from './App.vue'
import router from './router';
import { analytics } from './sdk/firebase';

const app = createApp(App);
app.use(router);
app.use(analytics);
app.mount('#app')

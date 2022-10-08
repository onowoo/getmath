import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import print from 'vue3-print-nb'
import router from './router'
import 'virtual:windi.css'
const app = createApp(App);

app.use(print)
app.use(router)
app.mount("#app");


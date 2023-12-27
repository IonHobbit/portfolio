import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createMetaManager } from 'vue-meta'
import { inject } from '@vercel/analytics';

import '@/assets/styles/main.scss'

createApp(App)
  .use(store).use(router).use(createMetaManager())
  .mount('#app')

inject();
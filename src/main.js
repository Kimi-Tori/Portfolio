import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';

import '@/styles/index.scss';

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app');

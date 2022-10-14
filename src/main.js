import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Notifications from '@kyvg/vue3-notification'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import Echo from "laravel-echo";

window.Pusher = require('pusher-js');
window.Pusher.Runtime.createXHR = function () {
  let xhr = new XMLHttpRequest();
  xhr.withCredentials = true;
  return xhr;
};

window.Echo = new Echo({
  broadcaster: `${process.env.VUE_APP_ECHO_BROADCASTER}`,
  key: `${process.env.VUE_APP_ECHO_KEY}`,
  wsHost: `${process.env.VUE_APP_ECHO_WS_HOST}`,
  wsPort: `${process.env.VUE_APP_ECHO_WS_PORT}`,
  transports: ['websocket', 'polling', 'flashsocket', 'ws', 'wss'],
  cluster: `${process.env.VUE_APP_ECHO_CLUSTER}`,
  authEndpoint: `${process.env.VUE_APP_DOMAIN}:${process.env.VUE_APP_PORT}/broadcasting/auth`,
  auth: {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  },
  credentials: "include",
  mode: 'no-cors',
  forceTLS: false,
  disableStats: true
});

createApp(App).use(store).use(router).use(Notifications).mount('#app');

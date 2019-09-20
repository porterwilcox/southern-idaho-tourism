import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MQ from 'vue-mq'
import VueQrcodeReader from "vue-qrcode-reader";
import 'vue-qrcode-reader/dist/vue-qrcode-reader.css'

Vue.config.productionTip = false

Vue.use(VueQrcodeReader);
Vue.use(MQ, {
  breakpoints: {
    1: 576, //sm...
    2: 768,
    3: 992,
    4: 1024,
    5: 1200
  }
})

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

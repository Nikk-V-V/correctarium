import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import './assets/scss/style.scss'
import './registerServiceWorker'
const moment = require('moment')
require('moment/locale/uk')

Vue.config.productionTip = false

Vue.use(VueMoment, {
  moment
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMoment from 'vue-moment'
import 'moment/locale/uk'
import './assets/scss/style.scss'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueMoment)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

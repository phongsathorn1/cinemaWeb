import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './routes.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueCarousel)

library.add(faMapMarkerAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

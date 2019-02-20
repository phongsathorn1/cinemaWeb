import Vue from 'vue'
import VueRouter from 'vue-router'
// import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './routes.js'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from './pages/home.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Homepage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
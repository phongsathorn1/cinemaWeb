import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from './pages/home.vue'
import Loginpage from './pages/login.vue'
import Registerpage from './pages/register.vue'
import RegisteredSuccess from './pages/registeredSuccess.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/login',
        component: Loginpage
    },
    {
        path: '/register',
        component: Registerpage
    },
    {
        path: '/register/success',
        component: RegisteredSuccess
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
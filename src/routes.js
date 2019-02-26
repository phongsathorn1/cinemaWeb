import Vue from 'vue'
import VueRouter from 'vue-router'

import Homepage from './pages/home.vue'
import Loginpage from './pages/login.vue'
import Registerpage from './pages/register.vue'
import RegisteredSuccess from './pages/registeredSuccess.vue'
import MovieDetail from './pages/movieDetail.vue'
import Booking from './pages/booking.vue'
import Order from './pages/order.vue'

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
    },
    {
        path: '/movie/:id',
        component: MovieDetail
    },
    {
        path: '/movie/:id/booking',
        component: Booking
    },
    {
        path: '/order',
        component: Order
    }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router
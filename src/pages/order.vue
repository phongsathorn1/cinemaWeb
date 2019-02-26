<template>
    <div id="order" class="container">
        <h1>การสั่งซื้อของคุณ</h1>
        <show-ticket v-for="order in orders" :order="order" :key="order.movie.name.en"></show-ticket>
    </div>
</template>

<script>
import ShowTicket from '../components/booking/showTicket.vue'
import Helper from '../helper.js'

export default {
    components:{
        ShowTicket
    },
    data: () => {
        return {
            account: null,
            orders: null
        }
    },
    created(){
        let orders = JSON.parse(localStorage.getItem("purchests"))
        this.account = Helper.getAccount()
        orders.forEach(order => {
            if(order.account.email == this.account.email){
                this.orders = order.purchests
            }
        });
    },
    methods:{
        
    }
}
</script>

<style lang="scss">

</style>

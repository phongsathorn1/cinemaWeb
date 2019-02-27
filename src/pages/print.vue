<template>
    <div id="printpage">
        <div class="container">
            <show-ticket
            :order="order"
            >
            </show-ticket>
        </div>
    </div>
</template>

<script>
import ShowTicket from '../components/booking/showTicket.vue'

export default {
    components:{
        ShowTicket
    },
    data: () => {
        return {
            order: null
        }
    },
    mounted(){
        this.getOrder(this.$route.params.id)
    },
    updated(){
        window.print()
    },
    methods:{
        getOrder(orderId){
            let purchests = JSON.parse(localStorage.getItem("purchests"))
            purchests.forEach(purchest => {
                purchest.purchests.forEach(order => {
                    if(order.id == orderId){
                        this.order = order
                    }
                })
            });
        }
    }
}
</script>

<style lang="scss">
@media print{
    #app{
        color: #000000;
    }
}
</style>

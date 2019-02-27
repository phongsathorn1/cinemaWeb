<template>
    <div class="booking-success">
        <div class="card">
            <h1 class="success-title">ดำเนินการสั่งซื้อเสร็จสิ้น</h1>
            <show-ticket 
            :order="order"
            :enablePrint="true"
            :id="order.booking.id"
            >
            </show-ticket>
            <router-link :to="'/order'" tag="button" class="btn btn-secondary">ดูประวัติการสั่งซื้อ</router-link>
        </div>
    </div>
</template>

<script>
import ShowTicket from './showTicket.vue'

export default {
    props:["order"],
    components:{
        ShowTicket
    }
}
</script>

<style lang="scss">
.booking-success .success-title{
    text-align: center;
    margin: 20px 0px;
}
</style>

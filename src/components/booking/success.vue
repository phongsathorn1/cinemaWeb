<template>
    <div class="booking-success">
        <div class="card">
            <h1>ดำเนินการสั่งซื้อเสร็จสิ้น</h1>
            <show-ticket :order="order"></show-ticket>
            <button class="btn btn-light">ดูประวัติการสั่งซื้อ</button>
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

</style>

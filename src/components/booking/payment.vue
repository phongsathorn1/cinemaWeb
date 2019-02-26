<template>
    <div class="booking-payment">
        <div class="card">
            <h1>ยืนยันการซื้อบัตรชมภาพยนตร์</h1>
            <h2>ข้อมูลทั่วไป</h2>
            <div class="booking-account-info">
                <h3>{{getName()}}</h3>
                <p><b>อีเมล์</b> {{account.email}}</p>
            </div>

            <purchest-list :order="order"></purchest-list>

            <select-methods></select-methods>

            <button class="btn btn-success btn-payment-confirm" @click="pay">ชำระเงิน <span v-if="total">({{total}} บาท)</span></button>
        </div>
    </div>
</template>

<script>
import SelectMethods from '../payment/selectMethods.vue'
import PurchestList from '../payment/purchestList.vue'

export default {
    props: ['account', 'order'],
    components: {
        SelectMethods,
        PurchestList
    },
    data: () => {
        return {
            paymentMethod: null,
            total: 0
        }
    },
    created(){
        this.getTotal()
    },
    methods:{
        methodSelected(method){
            this.paymentMethod = method
        },
        getName(){
            return this.account.firstname+' '+this.account.lastname
        },
        getTotal(){
            this.total = this.order.booking.seats.reduce((total, x) => total+x.price, 0)
        },
        pay(){
            this.$emit('pay')
        }
    }
}
</script>

<style lang="scss">
.booking-payment h1{
    margin-bottom: 20px;
}

.booking-payment h2{
    font-size: 20px;
    font-weight: bold;
}

.btn-payment-confirm{
    margin-top: 20px;
}

</style>

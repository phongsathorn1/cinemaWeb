<template>
    <div class="booking-payment">
        <div class="card">
            <h1>ยืนยันการซื้อบัตรชมภาพยนตร์</h1>
            <div class="booking-section">
                <h2>ข้อมูลทั่วไป</h2>
                <div class="booking-account-info">
                    <h3>{{getName()}}</h3>
                    <p><b>อีเมล์</b> {{account.email}}</p>
                </div>
            </div>
            <div class="booking-section">
                <purchest-list :order="order"></purchest-list>
            </div>
            <div class="booking-section">
                <select-methods></select-methods>
            </div>

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
        if(this.account == null){
            swal({
                title: "กรุณาเข้าสู่ระบบ",
                text: "กรุณาเข้าสู่ระบบเพื่อดำเนินการต่อ",
                icon: "info",
                buttons: {
                    confirm:{
                        text: "เข้าสู่ระบบ"
                    }
                }
            }).then(value => {
                this.$router.push('/login')
            })
        }
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
@import '../../style/main.scss';

.booking-payment h1{
    margin-bottom: 20px;
}

.booking-payment h2{
    font-size: 24px;
    font-weight: bold;
}

.booking-account-info{
    padding: 10px 30px;
    background: $third-color;
}

.booking-account-info p{
    margin-bottom: 0px;
}

.booking-account-info h3{
    font-size: 18px;
}

.btn-payment-confirm{
    margin-top: 20px;
}

.booking-section{
    margin: 20px 0px;
}

</style>

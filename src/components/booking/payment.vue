<template>
    <div class="booking-payment">
        <div class="card">
            <h1>ยืนยันการซื้อบัตรชมภาพยนตร์</h1>
            <div class="booking-section time-counter">
                <h2>ท่านมีเวลาในการดำเนินการให้เสร็จสิ้นใน {{getLifeTime}}</h2>
            </div>
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
                <select-methods @selected="selected = true"></select-methods>
            </div>

            <button class="btn btn-success btn-payment-confirm" @click="pay" :disabled="!selected">ชำระเงิน <span v-if="total">({{total}} บาท)</span></button>
        </div>
    </div>
</template>

<script>
import SelectMethods from '../payment/selectMethods.vue'
import PurchestList from '../payment/purchestList.vue'
import swal from 'sweetalert'

export default {
    props: ['account', 'order'],
    components: {
        SelectMethods,
        PurchestList
    },
    data: () => {
        return {
            paymentMethod: null,
            total: 0,
            time: 60,
            selected: false
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
            }).then(() => {
                this.$router.push('/login')
            })
        }
        this.getTotal()

        setInterval(()=>{
            this.time -= 1
        }, 1000)
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
        },
        timeout(){
            swal({
                title: "หมดเวลาดำเนินการ",
                text: "ระบบจะพาท่านกลับสู่หน้าแรก",
                icon: "warning",
                buttons: {
                    confirm:{
                        text: "ตกลง"
                    }
                }
            }).then(() => {
                this.$router.push('/')
            })
        }
    },
    computed:{
        getLifeTime(){
            let strTime = (Math.floor(this.time / 60)) +":"+ (this.time - (Math.floor(this.time / 60) * 60))
            let minutes = strTime.split(":")[0]
            let seconds = strTime.split(":")[1]

            if(minutes.length < 2){
                minutes = "0"+minutes
            }
            if(seconds.length < 2){
                seconds = "0"+seconds
            }

            return minutes+":"+seconds
        }
    },
    watch:{
        time(){
            if(this.time <= 0){
                this.timeout()
            }
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
    padding: 15px 30px;
    background: $third-color;
    font-size: 1.2em;
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

.payment-dialog .form-control{
    background: #2b2b2b;
}

.time-counter{
    padding: 10px;
    border: 1px solid $accent-color;
    border-radius: 5px;
    text-align: center;
}

.time-counter h2{
    margin-bottom: 0px;
}

</style>

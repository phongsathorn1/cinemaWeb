<template>
    <div class="booking-ticket">
        <div class="card">
            <div class="row">
                <div class="col-md-4">
                    <img :src="order.movie.image_url">
                </div>
                <div class="col-md-8">
                    <h2>{{order.movie.name.th}}</h2>
                    <p>{{order.movie.name.en}}</p>
                    <hr>
                    <p><font-awesome-icon icon="map-marker-alt" /> {{order.booking.location}}</p>
                    <p>โรงภาพยนตร์ {{order.booking.theater}}</p>
                    <p>วันที่ {{dateThai(order.movie.avaliable_date)}}</p>
                    <p>เวลา {{order.booking.round}}</p>
                    <seat-order-list :booking="order.booking"></seat-order-list>
                    <p>รวมราคาทั้งหมด {{getTotal()}} บาท</p>
                </div>
            </div>
            <div v-if="enablePrint || enableCancel" class="row">
                <div class="col-md-12 d-flex justify-content-end booking-ticket-control">
                    <button v-if="enablePrint" class="btn btn-info" @click="print">พิมพ์บัตรชมภาพยนตร์</button>
                    <button v-if="enableCancel" class="btn btn-light" @click="cancel">ยกเลิกออเดอร์</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SeatOrderList from './seatOrderList.vue'
import moment from 'moment'

export default {
    props: {
        order: Object,
        id: Number,
        enablePrint:{
            type: Boolean,
            default: false
        },
        enableCancel:{
            type: Boolean,
            default: false
        }
    },
    components:{
        SeatOrderList
    },
    methods:{
        getTotal(){
            return this.order.booking.seats.reduce((total, x) => total+x.price, 0)
        },
        dateThai(dateStr){
            const months = [
                "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", 
                "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
            ]

            let date = moment(dateStr, "DD-MM-YYYY")
            return date.day()+" "+months[date.month()]+" พ.ศ. "+(date.year()+543)
        },
        print(){
            this.$router.push('/order/'+this.id+'/print')
            this.$emit("print")
        },
        cancel(){
            this.$emit("cancel")
        }
    }
}
</script>

<style lang="scss">
.booking-ticket img{
    width: 100%;
}

.booking-ticket-control .btn{
    margin-left: 10px;
}

.booking-ticket-control .btn:first-child{
    margin-left: 0px;
    text-align: right;
}
</style>

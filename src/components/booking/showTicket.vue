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
        </div>
    </div>
</template>

<script>
import SeatOrderList from './seatOrderList.vue'
import moment from 'moment'

export default {
    props: ["order"],
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
        }
    }
}
</script>

<style lang="scss">
.booking-ticket img{
    width: 100%;
}
</style>

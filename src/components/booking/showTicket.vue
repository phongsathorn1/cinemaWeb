<template>
    <div class="booking-ticket">
        <div class="booking-ticket-item">
            <div class="row">
                <div class="col-md-4">
                    <img class="movie-poster" :src="order.movie.image_url">
                </div>
                <div class="col-md-8">
                    <h2>{{order.movie.name.th}}</h2>
                    <p>{{order.movie.name.en}}</p>
                    <hr>
                    <p class="ticket-location"><font-awesome-icon icon="map-marker-alt" /> {{order.booking.location}}</p>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="ticket-info-title">โรงภาพยนตร์</div>
                                    <div class="ticket-info-detail">{{order.booking.theater}}</div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="ticket-info-title">วันที่</div>
                                    <div class="ticket-info-detail">{{dateThai(order.movie.avaliable_date)}}</div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="ticket-info-title">เวลา</div>
                                    <div class="ticket-info-detail">{{order.booking.round}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="ticket-info-title">QR Code</div>
                                    <div class="ticket-info-detail">
                                        <img class="ticket-qr" src="@/assets/qr.svg">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <seat-order-list :booking="order.booking"></seat-order-list>
                    <p class="text-center"><span class="total-price">ราคาทั้งหมด {{getTotal()}} บาท</span></p>
                </div>
            </div>
            <div v-if="enablePrint || enableCancel" class="row">
                <div class="col-md-12">
                    <div class="d-flex justify-content-end booking-ticket-control">
                        <button v-if="enablePrint" class="btn btn-info" @click="print">พิมพ์บัตรชมภาพยนตร์</button>
                        <button v-if="enableCancel" class="btn btn-light" @click="cancel">ยกเลิกออเดอร์</button>
                    </div>
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
@import '../../style/main.scss';

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

.booking-ticket .movie-poster{
    width: 70%;
    display: block;
    margin: 30px auto;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.85);
}

.booking-ticket-item{
    padding: 20px 10px;
    border-radius: 5px;
    background: $secondary-bg-color;
    margin: 20px 0px;
}

.booking-ticket-item h2{
    margin-bottom: 0px;
}

.booking-order-total{
    border-top: 1px solid $border-color;
}

#order .total-price{
    text-align: center;
    font-weight: bold;
    display: block;
    margin: 0px 20px;
    border: 2px solid $accent-secondary-color;
    border-radius: 10px;
    padding: 10px 20px;
    color: #ffffff;
    font-size: 16px;
}

.booking-ticket-control{
    // border-top: 1px solid $border-color;
    padding: 20px;
    padding-bottom: 0px;
}

.ticket-info-detail{
    margin-bottom: 20px;
}

.ticket-info-title{
    font-size: 20px;
    color: $accent-color;
    font-weight: bold;
}

.ticket-location{
    background: $third-color;
    padding: 10px;
    border-radius: 5px;
}

.booking-ticket .booking-order{
    background-color: $third-color;
}

.ticket-info-detail .ticket-qr{
    width: 80%;
}

.total-price{
    font-size: 1.5em;
    font-weight: bold;
    color: $accent-color;
}
</style>

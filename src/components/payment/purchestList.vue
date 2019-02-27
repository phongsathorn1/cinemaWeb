<template>
    <div class="booking-purchest">
        <h2>รายการการสั่งซื้อ</h2>
        <div class="booking-purchest-container">
            <div class="row">
                <div class="col-md-5">
                    <div class="booking-purchest-movie">
                        <div class="purchest-movie">
                            <div class="purchest-movie-col">
                                <img :src="order.movie.image_url" height="100px">
                            </div>
                            <div class="purchest-movie-col">
                                <h4>{{order.movie.name.th}}</h4>
                                <p>{{order.movie.name.en}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="booking-purchest-order">
                        <seat-order-list :booking="order.booking"></seat-order-list>
                        <div class="booking-order-total">
                            <div class="row">
                                <div class="col-3 booking-order-col">
                                    ทั้งหมด<br>
                                    <span class="total-price">รวม</span>
                                </div>
                                <div class="col-3 booking-order-col">
                                    {{this.totalTicket}} ใบ<br>
                                    <span class="total-price">{{this.total}} บาท</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SeatOrderList from '../booking/seatOrderList.vue'

export default {
    props: ["order"],
    components:{
        SeatOrderList
    },
    data: () => {
        return {
            total: 0
        }
    },
    created(){
        this.getTotal()
    },
    methods:{
        getTotal(){
            this.total = this.order.booking.seats.reduce((total, x) => total+x.price, 0)
        }
    },
    computed:{
        totalTicket(){
            return this.order.booking.seats.length
        }
    }
}
</script>

<style lang="scss">
@import '../../style/main.scss';

.seat-icon{
    background-image: url('../../assets/seat.svg');
    background-repeat: no-repeat;
    background-position-y: center;
    height: 100%;
}

.booking-purchest-container{
    padding: 20px;
    background: #3e3e3e;
}

.booking-purchest .purchest-movie {
    display: flex;
}

.booking-purchest .purchest-movie .purchest-movie-col{
    margin-left: 20px;
}

.booking-purchest-order{
    border-left: 1px solid #636363;
}

.booking-order-total {
    font-size: 18px;
    padding: 10px 30px;
}

.booking-order-col{
    text-align: left;
}

.booking-purchest-order .total-price{
    font-weight: bold;
    color: $accent-color;
}
</style>

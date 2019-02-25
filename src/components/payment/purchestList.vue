<template>
    <div class="booking-purchest">
        <h3>รายการการสั่งซื้อ</h3>
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
                        <ul class="booking-order">
                            <li v-for="seat in order.booking.seats" :key="seat.seat">
                                <div class="booking-order-item">
                                    <div class="row">
                                        <div class="col-2">
                                        </div>
                                        <div class="col-10">
                                            <div class="booking-order-header">
                                                {{seat.seat}}
                                            </div>
                                            <div class="booking-order-detail">
                                                ประเภท: เด็กเล็ก<br>
                                                <div class="booking-item-price">
                                                    ราคา: {{seat.price}} บาท
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="booking-order-total">
                            รวม {{this.total}} บาท
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["order"],
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
}
</script>

<style lang="scss">
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

.booking-order{
    border-left: 1px solid #636363;
    list-style: none;
    padding: 0px 20px;
}

.booking-order .booking-order-item{
    padding: 10px;
    border-bottom: 1px solid #636363;
}

.booking-order .booking-order-header{
    font-size: 25px;
    font-weight: bold;
}

.booking-order .booking-item-price{
    border: 1px solid #55b776;
    display: inline-block;
    padding: 3px 8px;
    border-radius: 10px;
    margin-top: 10px;
}

</style>

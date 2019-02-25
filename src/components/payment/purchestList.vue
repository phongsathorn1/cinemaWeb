<template>
    <div class="booking-purchest">
        <h3>รายการการสั่งซื้อ</h3>
        <div class="row">
            <div class="col-md-5">
                <div class="booking-purchest-movie">
                    <div class="purchest-movie">
                        <img :src="order.movie.image_url" height="100px">
                        <h4>{{order.movie.name.th}}</h4>
                        <p>{{order.movie.name.en}}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <div class="booking-purchest-order">
                    <ul class="booking-order">
                        <li v-for="seat in order.booking.seats" :key="seat.seat">
                            <div class="booking-order-item">
                                <div class="booking-order-header">
                                    {{seat.seat}}
                                </div>
                                <div class="booking-order-detail">
                                    ประเภท: เด็กเล็ก<br>
                                    {{seat.price}} บาท
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

</style>

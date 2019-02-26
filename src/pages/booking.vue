<template>
    <div class="container">
        <div class="row movie-booking-section">
            <div class="col-md-12">
                <div class="card movie-booking-top">
                    <div class="row">
                        <div class="col-1">
                            <img :src="movie.image_url">
                        </div>
                        <div class="col-10">
                            <h1>{{movie.name.th}}</h1>
                            <p>{{movie.name.en}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row movie-booking-section">
            <div class="col-md-12">
                <step-bar :step="step" @back="gotoStep($event)"></step-bar>
            </div>

            <template v-if="step < 3">
                <div class="col-md-9">
                    <div id="step1" v-if="step == 1">
                        <day-selector 
                        :days="movie.avaliables"
                        @selected-day="selectedDay($event)"
                        >
                        </day-selector>
                        <theater-list
                        :theaters="selected"
                        @selected="selectedTheater($event)"
                        >
                        </theater-list>
                    </div>

                    <div id="step2" v-if="step == 2">
                        <seat-list
                        :selected="getSeats"
                        @toggle-seat="updateSeats($event)"
                        >
                        </seat-list>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="card movie-booking-check">
                        <!-- <img :src="movie.image_url"> -->
                        <h3>{{movie.name.th}}</h3>
                        <p>{{movie.name.en}}</p>
                        <hr>
                        <p v-if="booking.theater"><b>โรงภาพยนตร์</b> {{booking.theater}}</p>
                        <p v-if="booking.location"><b>สถานที่</b> {{booking.location}}</p>
                        <p v-if="booking.round"><b>รอบฉาย</b> {{booking.round}}</p>
                        <hr>
                        <template v-if="bookingSeat">
                            <p><b>ที่นั่ง</b> {{bookingSeat.seats}}</p>
                            <p><b>ราคา</b> {{bookingSeat.total}}</p>
                            <button class="btn btn-success" @click="payment">ดำเนินการต่อ</button>
                        </template>
                    </div>
                </div>
            </template>

            <div class="col-md-12" v-if="step == 3">
                <div id="step3">
                    <payment 
                    :account="account"
                    :order="getOrder"
                    @pay="pay"
                    >
                    </payment>
                </div>
            </div>

            <div class="col-md-12" v-if="step == 4">
                <div id="step4">
                    <success></success>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import movies from '../movies.json'
import DaySelector from '../components/booking/daySelector.vue'
import TheaterList from '../components/booking/theaterList.vue'
import StepBar from '../components/booking/stepBar.vue'
import SeatList from '../components/booking/seatList.vue'
import Payment from '../components/booking/payment.vue'
import Success from '../components/booking/success.vue'

export default {
    components:{
        DaySelector,
        TheaterList,
        StepBar,
        SeatList,
        Payment,
        Success
    },
    data: () => {
        return {
            movie: null,
            account: null,
            booking: {
                theater: "โรงภาพยนตร์ 3",
                location: "เอ็มพรีเว่ ซีเนคลับ เอ็มโพเรียม",
                round: null,
                seats: []
            },
            selected: null,
            step: 1
        }
    },
    created(){
        this.movie = this.getMovie()
        this.getAccount()
    },
    methods:{
        getAccount(){
            this.account = JSON.parse(localStorage.getItem('account'))
        },
        getMovie(){
            var selectedMovie = null
            movies.movies.forEach(movie => {
                if(movie.id == this.$route.params.id){
                    selectedMovie = movie
                }
            })

            return selectedMovie
        },
        selectedDay(day){
            this.selected = day
        },
        selectedTheater(event){
            this.booking.theater = event.theater
            this.booking.location = event.location
            this.booking.round = event.round

            this.step++
        },
        updateSeats(event){
            if(event.selected){
                this.booking.seats.push({
                    seat: event.seat,
                    price: 30
                })
            }else{
                let index = this.booking.seats.map(x => x.seat).indexOf(event.seat);
                if(index > -1){
                    this.booking.seats.splice(index, 1)
                }
            }
        },
        payment(){
            this.step++
        },
        pay(){
            this.step++
        },
        gotoStep(num){
            this.step = num
        }
    },
    computed:{
        bookingSeat(){
            var seatText = "";
            var price = 0;

            if(this.booking.seats.length > 0){
                price += this.booking.seats.reduce((total, x) => total+x.price, 0)
                seatText = this.booking.seats.map(x => x.seat).join(", ")

                return {
                    seats: seatText,
                    total: price
                }
            }

            return null
        },
        getOrder(){
            return {
                movie: this.movie,
                booking: this.booking
            }
        },
        getSeats(){
            return this.booking.seats.map(x => x.seat)
        }
    }
}
</script>

<style lang="scss">
h1{
    margin-bottom: 0px;
}

.movie-booking-section{
    margin-top: 20px;
    margin-bottom: 20px;
}

.movie-booking-top img{
    width: 100%;
}

.movie-booking-check img{
    width: 100%;
}

.movie-booking-check h3{
    font-size: 20px;
    font-weight: bold;
}

.movie-booking-check hr{
    margin: 0px;
    margin-bottom: 10px;
}

.movie-booking-check p{
    margin-bottom: 0px;
}
</style>

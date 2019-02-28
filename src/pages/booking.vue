<template>
    <div class="container">
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
                        <img :src="movie.image_url">
                        <p v-if="booking.theater"><b>โรงภาพยนตร์</b> {{booking.theater}}</p>
                        <p v-if="booking.location"><b>สถานที่</b> {{booking.location}}</p>
                        <p v-if="booking.round"><b>รอบฉาย</b> {{booking.round}}</p>
                        <template v-if="bookingSeat && step > 1">
                            <hr>
                            <p><b>จำนวนบัตร</b> {{booking.seats.length}}</p>
                            <p><b>ที่นั่ง</b> {{bookingSeat.seats}}</p>
                            <p><b>ราคา</b> {{bookingSeat.total}}</p>

                            <div class="select-seats">
                                <seat-type 
                                v-for="seat in booking.seats" 
                                :key="seat.seat" 
                                :seat="seat.seat"
                                :type="seat.type"
                                :showWarn="showWarn"
                                @change="changeType($event, seat.seat)"
                                >
                                </seat-type>
                            </div>

                            <button class="btn btn-success" style="width: 100%" @click="payment">ดำเนินการต่อ</button>
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
                    <success
                    :order="getOrder"
                    >
                    </success>
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
import SeatType from '../components/booking/seatType.vue'
import Helper from '../helper.js'

export default {
    components:{
        DaySelector,
        TheaterList,
        StepBar,
        SeatList,
        Payment,
        Success,
        SeatType
    },
    data: () => {
        return {
            movie: null,
            account: null,
            booking: {
                theater: null,
                location: null,
                round: null,
                seats: [],
                id: null
            },
            selected: null,
            step: 1,
            showWarn: false
        }
    },
    created(){
        this.movie = this.getMovie()
        this.getAccount()
    },
    methods:{
        getAccount(){
            this.account = Helper.getAccount()
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
                    price: 30,
                    type: "none"
                })
            }else{
                let index = this.booking.seats.map(x => x.seat).indexOf(event.seat)
                if(index > -1){
                    this.booking.seats.splice(index, 1)
                }
            }
        },
        changeType(event, seat){
            let index = this.booking.seats.map(x => x.seat).indexOf(seat)
            this.booking.seats[index].type = event
        },
        payment(){
            let pass = true
            this.booking.seats.forEach(seat => {
                if(seat.type == "none"){
                    this.showWarn = true
                    pass = false
                    return
                }
            })

            if(!pass){
                return
            }

            this.showWarn = false
            this.step++
        },
        pay(){
            if(localStorage.getItem("purchests") == null){
                localStorage.setItem("purchests", JSON.stringify([{
                    account: this.account,
                    purchests: [{
                        id: 1,
                        booking: this.booking,
                        movie: this.movie
                    }]
                }]))
                localStorage.setItem("orderIndex", 1)
            }else{
                let purchests = JSON.parse(localStorage.getItem("purchests"))
                let index = parseInt(localStorage.getItem("orderIndex"))
                let foundAccount = false

                index += 1

                purchests.forEach(purchest => {
                    if(purchest.account.email == this.account.email){
                        purchest.purchests.push({
                            id: index,
                            booking: this.booking,
                            movie: this.movie
                        })
                        foundAccount = true
                    }
                })

                if(!foundAccount){
                    purchests.push({
                        account: this.account,
                        purchests: [{
                            id: index,
                            booking: this.booking,
                            movie: this.movie
                        }]
                    })
                }

                this.booking.id = index

                localStorage.setItem("orderIndex", index)
                localStorage.setItem("purchests", JSON.stringify(purchests))
            }
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
    width: 60%;
    display: block;
    margin: 10px auto;
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

.select-seats .seat-type-block:last-child{
    border-bottom: none;
}
</style>

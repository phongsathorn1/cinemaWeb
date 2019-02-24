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
            <div class="col-md-9">
                <step-bar :step="step"></step-bar>
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
                    <seat-list>
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
                    <p v-if="bookingSeat"><b>ที่นั่ง</b> {{bookingSeat.seats}}</p>
                    <p v-if="bookingSeat"><b>ราคา</b> {{bookingSeat.total}}</p>
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

export default {
    components:{
        DaySelector,
        TheaterList,
        StepBar,
        SeatList
    },
    data: () => {
        return {
            movie: null,
            account: null,
            booking: {
                theater: "โรงภาพยนตร์ 3",
                location: "เอ็มพรีเว่ ซีเนคลับ เอ็มโพเรียม",
                round: null,
                seats: [
                    {
                        seat: "A5",
                        price: 20
                    },
                    {
                        seat: "A6",
                        price: 30
                    }
                ]
            },
            selected: null,
            step: 1
        }
    },
    created(){
        this.movie = this.getMovie()
        console.log(this.movie)
    },
    methods:{
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
        }
    },
    computed:{
        bookingSeat(){
            var seatText = "";
            var price = 0;

            if(this.booking.seats){
                price += this.booking.seats.reduce((total, x) => total+x.price, 0)
                console.log(price)
                seatText = this.booking.seats.map(x => x.seat).join(", ")

                return {
                    seats: seatText,
                    total: price
                }
            }

            return null
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

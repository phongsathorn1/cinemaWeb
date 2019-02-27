<template>
    <div class="billboard">
        <carousel 
        :perPage="1"
        :paginationActiveColor="'#55b776'"
        :autoplay="true"
        :autoplayTimeout="5000"
        :autoplayHoverPause="true"
        :loop="true"
        >
            <slide>
                <div class="billboard-ticket-slide" v-bind:style="'background-image: url('+publicPath+'movies/images/slider/Cafe_Funiculi_Funicula-teaser2.jpg)'">
                    <div class="billboard-overlay">
                    </div>
                    <div class="billboard-ticket-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="billboard-ticket">
                                        <img :src="publicPath+'movies/images/cafe.jpg'">
                                    </div>
                                </div>
                                <div class="col-md-8 d-flex align-content-end flex-wrap">
                                    <div class="billboard-ticket-info">
                                        <h1>เพียงชั่วเวลากาแฟยังอุ่น</h1>
                                        <p class="subtitle">Cafe Funiculi Funicula</p>
                                        <br>
                                        <router-link tag="button" class="btn btn-primary" :to="'/movie/4'">ดูรายละเอียด</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="billboard-ticket-slide" v-bind:style="'background-image: url('+publicPath+'movies/images/slider/friendzone.jpg)'">
                    <div class="billboard-overlay">
                    </div>
                    <div class="billboard-ticket-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="billboard-ticket">
                                        <img :src="publicPath+'movies/images/friendzone.jpg'">
                                    </div>
                                </div>
                                <div class="col-md-8 d-flex align-content-end flex-wrap">
                                    <div class="billboard-ticket-info">
                                        <h1>เฟรนโซน ระวังสิ้นสุดทางเพื่อน</h1>
                                        <p class="subtitle">Friend Zone</p>
                                        <br>
                                        <router-link tag="button" class="btn btn-primary" :to="'/movie/1'">ดูรายละเอียด</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
            <slide>
                <div class="billboard-slide" style="background-image: url('https://lh3.googleusercontent.com/9591330yAsqzf2G-CXou4T99TaDFvmhBwu4INqngvE1xufQjiO8IAh4mjj7fds69fYyisaVpi9BYnCNHKsDI7Q=w1920')"></div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    data () {
        return {
            publicPath: process.env.BASE_URL
        }
    },
    components:{
        Carousel,
        Slide
    }
}
</script>

<style lang="scss">
$height: 600px;

.billboard {
    height: $height;
    background-color: #000000;
}

.billboard-slide,
.billboard-ticket-slide{
    width: 100%;
    height: $height;
    background-size: cover;
}

.billboard-overlay{
    height: 100%;
    width: 100%;
    position: absolute;
    opacity: .8;
    background: linear-gradient(180deg,transparent,rgba(0,0,0,.6) 75%,rgba(0,0,0,.6));
}

.billboard-ticket img{
    height: 300px;
    display: block;
    margin: auto;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.85);
}

.billboard-ticket-bottom{
    position: absolute;
    bottom: 50px;
    width: 100%;
}

.billboard-ticket-info{
    margin-bottom: 20px;
}

.billboard-ticket-info h1{
    font-size: 2.5em;
    font-weight: bold;
    text-shadow: 2px 2px 1px #000000;
}

.billboard-ticket-info .subtitle{
    font-size: 1.5em;
    font-weight: bold;
}

.VueCarousel-pagination{
    position: absolute;
    width: 100%;
    bottom: 0px;
}
</style>

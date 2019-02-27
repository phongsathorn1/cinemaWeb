<template>
    <div class="container">
        <div class="movie-top row">
            <div class="col-md-4">
                <img :src="movie.image_url" class="movie-poster" width="200px">
            </div>
            <div class="col-md-8">
                <div class="movie-info">
                    <h1 class="movie-title">{{movie.name.th}}</h1>
                    <p class="subtitle">{{movie.name.en}}</p>
                    <p>วันที่เข้าฉาย: {{movie.avaliable_date}}</p>
                    <router-link :to="movie.id+'/booking'" tag="button" class="btn btn-primary">จองตั๋วภาพยนตร์</router-link>
                </div>
            </div>
        </div>
        <div class="movie-teaser row" v-if="movie.teaser">
            <div class="col-md-12">
                <h2>ตัวอย่างภาพยนตร์</h2>
                <div class="embed-responsive embed-responsive-16by9 movie-teaser-video">
                    <iframe class="embed-responsive-item" :src="movie.teaser" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="synopsis row">
            <div class="col-md-12">
                <h2>เรื่องย่อ</h2>
                <p v-html="movie.synopsis" id="synopsis-detail"></p>
            </div>
        </div>
    </div>
</template>

<script>
import movies from "../movies.json"

export default {
    data: () => {
        return {
            movies: movies.movies,
            movie: null
        }
    },
    created(){
        this.movies.forEach(movie => {
            if(movie.id == this.$route.params.id){
                this.movie = movie
            }
        });
    }
}
</script>

<style lang="scss">
@import '../style/main.scss';

.synopsis,
.movie-teaser{
    background: #1f1f1f;
    padding: 20px 20px;
}

.synopsis{
    margin-bottom: 50px;
}

.movie-teaser-video{
    text-align: center;
    width: 80%;
    margin: auto;
    margin-top: 30px;
}

.movie-teaser-video iframe{
    margin: auto;
    display: block;
    width: 70%;
    height: 100%;
}
#synopsis-detail{
    text-align: justify;
    white-space: pre-wrap;
}

.movie-teaser h2,
.synopsis h2{
    text-align: center;
    margin-top: 10px;
}

.movie-top{
    background: $secondary-bg-color;
    padding: 20px;
}

.movie-top .subtitle{
    font-size: 20px;
}

.movie-top .movie-poster{
    display: block;
    margin: auto;
    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.85);
}

.movie-title{
    font-size: 30px;
}

.movie-info{
    padding: 20px 0px;
}
</style>

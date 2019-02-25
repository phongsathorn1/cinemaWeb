<template>
    <div class="container">
        <div class="movie-top row">
            <div class="col-md-4">
                <img :src="movie.image_url" width="200px">
            </div>
            <div class="col-md-8">
                <h1>{{movie.name.th}}</h1>
                <p class="subtitle">{{movie.name.en}}</p>
                <p>วันที่เข้าฉาย: {{movie.avaliable_date}}</p>
                <router-link :to="movie.id+'/booking'" tag="button" class="btn btn-primary">จองตั๋วภาพยนตร์</router-link>
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
$secondary-bg-color: #2b2b2b;

.synopsis{
    background: #1f1f1f;
    padding: 20px;
}

#synopsis-detail{
    text-align: justify;
    white-space: pre-wrap;
}

.movie-top{
    background: $secondary-bg-color;
    padding: 20px;
}

.movie-top .subtitle{
    font-size: 20px;
}
</style>

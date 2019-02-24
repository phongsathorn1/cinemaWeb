<template>
    <div class="container">
        <h1>{{movie.name.th}}</h1>
        <p>{{movie.name.en}}</p>
        <img :src="movie.image_url" width="200px">
        <router-link :to="movie.id+'/booking'">จองตั๋วภาพยนตร์</router-link>
        <p>วันที่เข้าฉาย: {{movie.avaliable_date}}</p>
        <p v-html="movie.synopsis" id="synopsis"></p>
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
        console.log(this.$route.params.id)
        this.movies.forEach(movie => {
            if(movie.id == this.$route.params.id){
                this.movie = movie
                console.log(this.movie)
            }
        });
    }
}
</script>

<style lang="scss">
#synopsis{
    text-align: justify;
    white-space: pre-wrap;
}
</style>

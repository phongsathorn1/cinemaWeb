<template>
  <div id="homepage">
    <billboard></billboard>
    <div id="new-movie-section">
      <div class="container">
        <search-box
        @search="search($event)"
        @theatersearch="theatherSearch($event)"
        ></search-box>
        <h1>ภาพยนต์ใหม่ที่กำลังฉาย</h1>
        <div class="flex-wrapper new-movie-container">
          <div class="movie-card-item" v-for="movie in movies" :key="movie.id">
            <router-link :to="'/movie/'+movie.id">
              <movie-card 
                :title="movie.name.th" 
                :enTitle="movie.name.en"
                :date="movie.avaliable_date" 
                :image="movie.image_url"
              >
              </movie-card>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Billboard from "../components/billboard.vue"
import MovieCard from "../components/MovieCard.vue"
import movies from "../movies.json"
import SearchBox from '../components/searchBox.vue'
import moment from 'moment'

export default {
  components: {
    Billboard,
    MovieCard,
    SearchBox
  },
  data: () => {
    return {
      movies: movies.movies,
      theater: null
    };
  },
  methods:{
    search(event){
      let keyword = event.toLowerCase()
      this.movies = movies.movies
      let thSearch = []
      if(keyword == ''){
        this.theatherSearch(this.theater)
      }else{
        this.theatherSearch(this.theater)
        this.movies = this.movies.filter(x => {
          return x.name.en.toLowerCase().indexOf(keyword) >= 0 || x.name.th.toLowerCase().indexOf(keyword) >= 0
        })
      }
    },
    theatherSearch(event){
      this.theater = event
      this.movies = movies.movies
      if(this.theater == "เลือกโรงภาพยนต์" || this.theater == null){
        this.movies = movies.movies
      }else{
        let moviesTemp = []
        this.movies.forEach(movie => {
          movie.avaliables.forEach(avaliable =>{
            if(moment(avaliable.day, "DD-MM-YYYY").isSame(new Date(), "day")){
              avaliable.locations.forEach(location => {
                if(location.name == this.theater){
                  moviesTemp.push(movie)
                }
              })
            }
          })
        });

        this.movies = moviesTemp
      }
    }
  }
};
</script>

<style lang="scss">
$secondary-bg-color: #2b2b2b;

#new-movie-section {
  padding: 30px 0px;
  background-color: $secondary-bg-color;
}

.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.movie-card-item {
  width: 20%;
}

.movie-card-item a{
  text-decoration: none;
  color: #ffffff;
}

.new-movie-container{
  margin: 20px 0px;
}
</style>

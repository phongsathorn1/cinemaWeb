<template>
  <div id="homepage">
    <billboard></billboard>
    <div id="new-movie-section">
      <div class="container">
        <h1>ภาพยนต์ใหม่ที่กำลังฉาย</h1>
        <div class="flex-wrapper">
          <div class="movie-card-item" v-for="movie in movies" :key="movie.id">
            <router-link :to="'/movie/'+movie.id">
              <movie-card 
                :title="movie.name.th" 
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
import Billboard from "../components/billboard.vue";
import MovieCard from "../components/MovieCard.vue";
import movies from "../movies.json";

export default {
  components: {
    Billboard,
    MovieCard
  },
  data: () => {
    return {
      movies: movies.movies
    };
  }
};
</script>

<style lang="scss">
$secondary-bg-color: #2b2b2b;

// .container-fluid {
//   padding-left: 30px;
//   padding-right: 30px;
// }

#new-movie-section {
  padding: 50px 0px;
  background-color: $secondary-bg-color;
}

.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.movie-card-item {
  width: 20%;
}
</style>

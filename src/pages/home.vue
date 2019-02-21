<template>
  <div id="homepage">
    <billboard></billboard>
    <div id="new-movie-section">
      <div class="container">
        <h1>ภาพยนต์ใหม่ที่กำลังฉาย</h1>
        <div class="flex-wrapper">
          <div class="movie-card-item" v-for="movie in movies" :key="movie.id">
            <movie-card 
              :title="movie.name" 
              :date="movie.avaliable_date" 
              :image="movie.image_url"
            >
            </movie-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Billboard from "../components/billboard.vue";
import MovieCard from "../components/MovieCard.vue";

export default {
  components: {
    Billboard,
    MovieCard
  },
  data: () => {
    return {
      movies: [
        {
          id: 1,
          name: "เฟรนโซน ระวังสิ้นสุดทางเพื่อน",
          avaliable_date: Date.now(),
          image_url:
            "https://lh3.googleusercontent.com/hGX4-13iqHM1Kx_nyj67AtCsFXAjJyS0wxoEcJynOs99BUJXQWLIUQFcsje3jdMW75wtrJU2ktywEF3gxoKe"
        },
        {
          id: 2,
          name: "กัปตัน มาร์เวล",
          avaliable_date: Date.now(),
          image_url:
            "https://lh3.googleusercontent.com/3Ost-FvXYMVAs84hLxJAn9qqIh9s_YCC8oCySCuOWIJWIu8zPIuKYJ9FG_FEFBqKZoQnguVOuNAkg9kArkPM"
        }
      ]
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

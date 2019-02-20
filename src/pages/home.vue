<template>
  <div id="homepage">
    <billboard></billboard>
    <div class="container">
      <div id="new-movie-section">
        <h1>ภาพยนต์ใหม่ที่กำลังฉาย</h1>
        <div class="row">
          <div class="movie-card-item col-6 col-md-2" v-for="n in 10" :key="n">
            <movie-card
              class="test"
              title="Friend Zone"
              date="12-1-2019"
              image="movies/images/friendzone.jpg"
            ></movie-card>
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
  }
};
</script>

<style lang="scss">
#new-movie-section {
  padding: 50px 0px;
}
</style>

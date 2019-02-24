<template>
  <div class="movie-card" @mouseover="cardHover" @mouseout="cardHoverOut" v-bind:class="cardStyle">
    <div class="movie-card-poster">
      <img v-bind:src="image">
    </div>
    <div class="movie-card-info">
      <h2>{{title}}</h2>
      <span>วันที่เข้าฉาย {{date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "date", "image"],
  data: () => {
    return {
      cardStyle: {
        "card-hover": false
      },
      // movieDate: this.date
    };
  },
  methods: {
    cardHover() {
      this.cardStyle["card-hover"] = true;
    },
    cardHoverOut() {
      this.cardStyle["card-hover"] = false;
    }
  },
  computed: {
    stringDate: () => {
      // return this.movieDate.getFullYear()
    }
  }
};
</script>

<style lang="scss">
$secondary-bg-color: #2b2b2b;

.movie-card .movie-card-info h2 {
  font-size: 1.3em;
  margin-bottom: 0px;
  font-weight: bold;
}

.movie-card .movie-card-info {
  padding: 5px;
  text-align: center;
  background: $secondary-bg-color;
  padding-top: 10px;
  // padding: 10px 5px;
}

.movie-card {
  background-color: $secondary-bg-color;
  margin: 0px 5px;
  margin-bottom: 10px;
  padding: 20px 10px;
  cursor: pointer;
}

.movie-card-poster {
  text-align: center;
  width: 80%;
  margin: auto;
}

.movie-card-poster img {
  margin: auto;
  display: block;
  width: 100%;
}

.card-hover {
  // padding: 7px;
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.68);
  border-radius: 5px;
}
</style>

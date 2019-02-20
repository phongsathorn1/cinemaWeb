<template>
  <div class="movie-card" @mouseover="cardHover" @mouseout="cardHoverOut" v-bind:class="cardStyle">
    <div class="movie-card-poster" v-bind:style="{backgroundImage: 'url('+image+')'}"></div>
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
      }
    };
  },
  methods: {
    cardHover() {
      this.cardStyle["card-hover"] = true;
    },
    cardHoverOut() {
      this.cardStyle["card-hover"] = false;
    }
  }
};
</script>

<style lang="scss">
.movie-card .movie-card-info h2 {
  font-size: 1.3em;
  margin-bottom: 0px;
}

.movie-card .movie-card-info {
  margin-top: 10px;
  padding: 5px;
  text-align: center;
}

.movie-card {
  background-color: #141414;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}

.movie-card-poster {
  height: 240px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.card-hover {
  border: 3px solid #ffffff;
  padding: 7px;
}
</style>

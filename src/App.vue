<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="app-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'

export default {
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
$primary-black: #141414;
$secondary-bg-color: #2b2b2b;

body{
  background-color: $primary-black;
  font-family: 'Athiti', sans-serif;
  color: #FFFFFF;
  font-size: 0.9em;
}

.bg-dark{
  background-color: $primary-black !important;
}

h1{
  font-size: 1.8em;
}

#app {
  font-family: 'Athiti', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.card{
  background: $secondary-bg-color;
  padding: 20px;
}

hr{
  border-color: #717171;
}
</style>

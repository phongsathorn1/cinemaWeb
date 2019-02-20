<template>
  <div id="app">
    <Navbar></Navbar>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from './components/navbar.vue'

export default {
  components:{
    Navbar
  }
}

// import HelloWorld from './components/HelloWorld.vue'

// export default {
//   name: 'app',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style lang="scss">
$primary-black: #141414;

body{
  background-color: $primary-black;
  font-family: 'Athiti', sans-serif;
  color: #FFFFFF;
  font-size: 0.85em;
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
</style>

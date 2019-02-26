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
@import 'style/main.scss';

body{
  background-color: $primary-black;
  font-family: $default-font;
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
  font-family: $default-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

.card{
  background: $secondary-bg-color;
  padding: 20px;
}

hr{
  border-color: $border-color;
}

.form-control{
  background: $secondary-bg-color;
  border: none;
  color: #FFFFFF;
}

.form-control::placeholder{
  color: #8e8e8e;
}

.form-control:focus{
  background-color: $secondary-bg-color;
  box-shadow: 0 0 0 0.08rem #4CAF50;
  border-color: $accent-color;
  color: #FFFFFF;
}
</style>

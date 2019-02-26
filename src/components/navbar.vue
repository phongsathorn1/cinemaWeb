<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <router-link class="navbar-brand" :to="'/'">Cinema</router-link>
  <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
    <li><router-link class="nav-item nav-link" :to="'/login'">Sign in</router-link></li>
  </ul>
</nav>
</template>

<script>
export default {};
</script>

<style>
</style>

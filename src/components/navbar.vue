<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" :to="'/'">Cinema</router-link>
    <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
      <template v-if="!account">
        <li><router-link class="nav-item nav-link" :to="'/register'">Register</router-link></li>
        <li><router-link class="nav-item nav-link" :to="'/login'">Sign in</router-link></li>
      </template>
      <template v-else>
        <li class="dropdown">
          <a class="nav-item nav-link dropdown-toggle mr-md-2" id="profile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{accountName}}
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="profile">
            <router-link :to="'/order'" class="dropdown-item">ประวัติการสั่งซื้อ</router-link>
            <div class="dropdown-divider"></div>
            <a href="javascript:void(0)" class="dropdown-item" @click="logout()">ออกจากระบบ</a>
          </div>
        </li>
      </template>
    </ul>
  </div>
</nav>
</template>

<script>
import Helper from '../helper.js'

export default {
  data: () => {
    return {
      account: null
    }
  },
  created(){
    this.account = Helper.getAccount()
  },
  methods:{
    logout(){
      Helper.logout()
    }
  },
  computed:{
    accountName(){
      return this.account.firstname+" "+this.account.lastname
    }
  }
};
</script>

<style>
</style>

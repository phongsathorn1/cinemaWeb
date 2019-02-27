<template>
  <div id="loginpage">
    <div class="container">
      <div class="card">
        <h1>เข้าสู่ระบบ</h1>
        <form v-on:submit.prevent>
          <div class="form-group">
            <label for="email">อีเมล์</label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="อีเมล์"
              v-model="email"
            >
            <small
              id="emailHelp"
              class="form-text text-muted"
            >We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="password">รหัสผ่าน</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="รหัสผ่าน"
            >
          </div>
          <button type="submit" class="btn btn-primary" @click="login">เข้าสู่ระบบ</button>
          <router-link tag="button" :to="'/register'" class="btn btn-light">สมัครสมาชิก</router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
        email: "",
        password: ""
    }
  },
  methods:{
      login(){
          var accounts = JSON.parse(localStorage.getItem("registered"))
          
          accounts.forEach(account => {
              if(account.email.toLowerCase() == this.email.toLowerCase() && 
                account.password.toLowerCase() == this.password.toLowerCase()){
                    localStorage.setItem("account", JSON.stringify(account))
                    this.$router.push('/')
                    location.reload()
              }
          });
      }


  }
};
</script>

<style lang="scss">
.card .btn{
  margin-right: 10px;
}
.card .btn:first-child{
  margin-right: 0px;
}
</style>

<template>
  <div id="registerpage">
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="firstname">Firstname</label>
        <input
          type="text"
          class="form-control"
          id="firstname"
          placeholder="Firstname"
          v-model="firstname"
        >
      </div>

      <div class="form-group">
        <label for="firstname">Lastname</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          placeholder="Lastname"
          v-model="lastname"
        >
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email"
          v-model="email"
        >
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        >
      </div>

      <div class="form-group">
        <label for="passwordConfirmation">Password Confirmation</label>
        <input
          type="password"
          class="form-control"
          id="passwordConfirmation"
          placeholder="Password Confirmation"
          v-model="passwordConfirmation"
        >
      </div>

      <button type="submit" class="btn btn-primary" @click="validation">Register</button>
    </form>
  </div>
</template>

<script>
export default {
    data: () => {
        return {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
    },
    methods: {
        validation (){
            if(this.password != this.passwordConfirmation){
                alert("Error")
                return false
            }

            var user = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                password: this.password
            }

            if(localStorage.getItem("registered") == null){
                localStorage.setItem("registered", JSON.stringify([user]))
            }
            else{
                var registered = JSON.parse(localStorage.getItem("registered"))
                registered.push(user)

                localStorage.setItem("registered", JSON.stringify(registered))
            }

            this.$router.push('/register/success')
        }
    }
};
</script>

<style lang="scss">
</style>

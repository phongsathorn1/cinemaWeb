<template>
  <div id="loginpage">
    <form v-on:submit.prevent>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          placeholder="Password"
        >
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
        email: "",
        password: ""
    }
  }
};
</script>

<style lang="scss">
</style>

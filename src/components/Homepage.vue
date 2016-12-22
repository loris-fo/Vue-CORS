<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Hoempage</h1>
    <button class="btn btn-warning" v-on:click="getApi()">Get Api</button>
  </div>
</template>

<script>
import auth from '../auth'

const API = 'http://localhost:8081/api/v0.2';

export default {

  data() {
    return {
      test: ''
    }
  },
  methods: {
    getApi() {
      this.$http.get(API).then((response) => {
        console.log(response);

      }, (response) => {
        console.log(response);
      })
    }
  },

  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }

}
</script>

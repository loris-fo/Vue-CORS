import {router} from '../index'

import Vue from 'vue'

const API_URL = 'http://localhost:8080/'
const LOGIN_URL = API_URL + 'api/login'
const options = {
  headers: {
    "Accept" : "application/json; charset=utf-8",
    "Content-Type": "application/json; charset=utf-8",
    'Access-Control-Allow-Headers': '*'
  },
  crossOrigin: "http://localhost:8080"
}

export default {

  user: {
    authenticated: false
  },


  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, options).then(response => {
      console.log(response);
    })
  },

  checkAuth() {
    var jwt = localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}

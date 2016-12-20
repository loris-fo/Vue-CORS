import {router} from '../index'

const API_URL = 'http://localhost:8080/'
const LOGIN_URL = API_URL + 'api/login'
const TEST = API_URL + 'api'

export default {

  user: {
    authenticated: false
  },

  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then((data) => {
      localStorage.setItem('access_token', data.access_token)
      this.user.authenticated = true

      if(redirect) {
        router.go(redirect)
      }
    }, (err) => {
      context.error = err
    })
  },

  logout() {
    localStorage.removeItem('access_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('access_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },


  getAuthHeader() {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    }
  }
}

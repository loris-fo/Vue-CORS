import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Homepage from './components/Homepage.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
import auth from './auth'

auth.checkAuth()

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

export var router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/login': {
    component: Login
  },
  '/homepage': {
    component: Homepage
  }
})

router.redirect({
  '*': '/home'
})

router.start(App, '#app')

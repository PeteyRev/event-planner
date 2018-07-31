import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseapp'


Vue.use(VueRouter)

import store from './store'

import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'
import Signup from './components/Signup.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/dashboard', component: Dashboard},
    {path: '/signin', component: SignIn},
    {path: '/signup', component: Signup}
  ]
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn',user)
    router.push('/dashboard')
  } else {
    router.replace('/signIn')
  }
})

new Vue({
  el:'#app',
  router,
  store,
  render: h => h(App)
})

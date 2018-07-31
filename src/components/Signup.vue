<template>
<div class="col-md-6">
  <h3>Sign Up</h3>
  <div class="form-group">
    <input type="text" placeholder="email" class="form-control" v-model="email" />
    <input type="password" placeholder="password" class="form-control" v-model="password" />
    <br>
    <button @click="signUp" class="btn btn-primary">Sign Up</button>
  </div>
  <br>
  <p>{{error.message}}</p>
  <br>
    <router-link to="/signin">Already a user? Sign in</router-link>
</div>
</template>

<script>
import {
  firebaseApp
} from '../firebaseapp.js'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signUp() {
      firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>

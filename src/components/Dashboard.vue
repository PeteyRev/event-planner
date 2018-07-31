<template>
  <div class="col-md-6">
    <h3>Events Dashboard</h3>
    <button @click="signOut" class="btn btn-danger btn-sm">Sign Out</button>
    <hr>
    <AddEvent/>
    <hr>
    <div class="col-md-12">
      <EventItem
        v-for="(event_item, index) in this.$store.state.events"
        :event="event_item"
        key="index"
      />
    </div>
  </div>
</template>

<script>
import {firebaseApp, eventsRef} from '../firebaseapp.js'
import AddEvent from './AddEvent'
import EventItem from './EventItem'
  export default {
    methods: {
      signOut() {
        this.$store.dispatch('signOut')
        firebaseApp.auth().signOut()
      }
    },
    components: {
      AddEvent,
      EventItem
    },
    mounted() {
      eventsRef.on('value', snap => {
        let events = []
        snap.forEach(event => {
          events.push(event.val())
        })
        this.$store.dispatch('setEvents', events)
      })
    }
  }
</script>

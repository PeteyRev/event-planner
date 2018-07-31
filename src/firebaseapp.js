import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDW2_N8Zpi9CixMMncbRQ7jGWLsbeeTM74",
  authDomain: "turnout-7f119.firebaseapp.com",
  databaseURL: "https://turnout-7f119.firebaseio.com",
  projectId: "turnout-7f119",
  storageBucket: "turnout-7f119.appspot.com",
  messagingSenderId: "411389847275"
};
export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebaseApp.database().ref().child('events')

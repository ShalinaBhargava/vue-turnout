import firebase from 'firebase'

 const firebaseConfig = {
    apiKey: "AIzaSyAGq0p4vrBosfHmXAj_ATNL2CxqRyII8YA",
    authDomain: "turnout-c965f.firebaseapp.com",
    databaseURL: "https://turnout-c965f.firebaseio.com",
    projectId: "turnout-c965f",
    storageBucket: "",
    messagingSenderId: "590813975993",
    appId: "1:590813975993:web:739b742f3cddf24d"
  };
// Initialize Firebase
export const firebaseApp= firebase.initializeApp(firebaseConfig)
export const eventsRef = firebaseApp.database().ref().child('events')

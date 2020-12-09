import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAKhofQ40HCXv4VTkKvWlgELA7qpzbVHjI",
    authDomain: "agenda-medica-67e1d.firebaseapp.com",
    databaseURL: "https://agenda-medica-67e1d.firebaseio.com",
    projectId: "agenda-medica-67e1d",
    storageBucket: "agenda-medica-67e1d.appspot.com",
    messagingSenderId: "174011487998",
    appId: "1:174011487998:web:70decb1c53b84c8106f7af"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   const db= firebase.firestore()

  export default{
     firebase,
     db,

} 

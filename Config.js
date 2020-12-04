import firebase from 'firebase';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAbJMCrT2MK6ZeW7lHyxSeptk7FJjglD1M",
    authDomain: "project-58-299d2.firebaseapp.com",
    databaseURL: "https://project-58-299d2.firebaseio.com",
    projectId: "project-58-299d2",
    storageBucket: "project-58-299d2.appspot.com",
    messagingSenderId: "506152365169",
    appId: "1:506152365169:web:195a787a01e0b3bb19bfd0"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.database();
  



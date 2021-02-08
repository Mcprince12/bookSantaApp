import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyAN75IZQ8_GglI4QYDnoqwtty5vuBT3_k0",
    authDomain: "booksanta-8b807.firebaseapp.com",
    projectId: "booksanta-8b807",
    storageBucket: "booksanta-8b807.appspot.com",
    messagingSenderId: "770045899758",
    appId: "1:770045899758:web:acd92848441f69d6ba54ff"
  };
  
  firebase.initializeApp(firebaseConfig); 
  export default firebase.firestore();
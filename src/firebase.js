import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAUmxAQmkkpeXrzWmq5ACNV0LXAM6Y-VGE",
    authDomain: "renanao-e03cd.firebaseapp.com",
    databaseURL: "https://renanao-e03cd-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "renanao-e03cd",
    storageBucket: "renanao-e03cd.appspot.com",
    messagingSenderId: "350795518617",
    appId: "1:350795518617:web:9a6458269e288cdc255e08",
    measurementId: "G-KGSFRQQ44G"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const db = firebase.firestore();
  export default firebase;

  

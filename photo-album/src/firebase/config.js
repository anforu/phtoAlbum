import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCzO2y4ON65ATOSdaODgRcyAcOOaDM65gA",
    authDomain: "photoalbum-220c2.firebaseapp.com",
    projectId: "photoalbum-220c2",
    storageBucket: "photoalbum-220c2.appspot.com",
    messagingSenderId: "431118669323",
    appId: "1:431118669323:web:1e05d43f8d2792d7f3190e"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  export { projectFirestore, projectAuth }
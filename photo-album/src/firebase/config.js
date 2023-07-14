import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCzO2y4ON65ATOSdaODgRcyAcOOaDM65gA",
    authDomain: "photoalbum-220c2.firebaseapp.com",
    projectId: "photoalbum-220c2",
    storageBucket: "photoalbum-220c2.appspot.com",
    messagingSenderId: "431118669323",
    appId: "1:431118669323:web:1e05d43f8d2792d7f3190e"
  };

  //init firebase
  initializeApp(firebaseConfig)
  const app =   initializeApp(firebaseConfig)
  const db = getFirestore()
  const projectAuth = getAuth()
  const storage = getStorage(app)
  export { db, projectAuth, storage }

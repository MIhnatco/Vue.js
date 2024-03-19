import firebase from 'firebase/app'

//authentification with email and password
import 'firebase/auth'

//interact with database
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBdCZCiB9IC3F-6tRBojrZhPAw6vcS_coA',
  authDomain: 'library-72d68.firebaseapp.com',
  projectId: 'library-72d68',
  storageBucket: 'library-72d68.appspot.com',
  appId: '1:823794699141:web:d49493859276fc0ab0d2ec'
}

//initialize firebase
firebase.initializeApp(firebaseConfig)


const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users')


export {
  auth, 
  db, 
  usersCollection
}
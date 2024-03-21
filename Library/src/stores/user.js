import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    //registering a new user
    async register(values) {
      //create a new user with email and passwrod (firebase)
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      //store additional user information in firestore (uid)
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email
      })
      
      //updae user profile with display name
      await userCred.user.updateProfile({
        displayName: values.name 
      })

      //set the userLoggedIn state to true upon successful registration
      this.userLoggedIn = true
    }, 
    //action for authenticating an existing user
    async authenticate(values){
      //sign in with email and password
      await auth.signInWithEmailAndPassword(values.email, values.password);

      //set the userLoggedIn state to true upon successful authentication
      this.userLoggedIn = true
    },

    //action for signing out a user
    async signOut(){

      //sing out the current user (firebase signOut())
      await auth.signOut()

      //set the userLoggedIn state to false upon sign out
      this.userLoggedIn = false;
    }
  }
})

import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: false
  }),
  actions: {
    //reusable function for registering the user
    async register(values) {
      const userCred = await auth.createUserWithEmailAndPassword(values.email, values.password)

      //connecting the user with its uid
      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email
      })


      //user profile
      //user name 
      await userCred.user.updateProfile({
        displayName: values.name 
      })

      //user authentification status
      this.userLoggedIn = true
    }
  }
})

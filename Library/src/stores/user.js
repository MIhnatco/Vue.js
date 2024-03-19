import { defineStore } from "pinia";
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore("user", {
    state: () => ({
        userLoggedIn: false
    }),
    actions: {
        //reusable function for registering the user
        async register(values){
            await auth.createUserWithEmailAndPassword(values.email, values.password)

            await usersCollection.add({
                name: values.name, 
                email: values.email
              })

            //user authentification status
            this.userLoggedIn = true;
        }
    }
})
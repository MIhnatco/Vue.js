<template>
  <div class="flex">
    <div id="booksList" class="flex-1">
      <h1 class="text-xl">My personall library</h1>
    </div>

    <div class="text-black flex-none w-1/3">
      <h1 class="text-xl">New Book</h1>

      <div class="my-4">
        <form @submit.prevent="upload">
          <label for="title">Book's title:</label>
          <input type="text" id="title" v-model="bookTitle" />

          <label for="author">Book's author:</label>
          <input type="text" id="author" v-model="bookAuthor" />

          <label for="genre">Genre:</label>
          <input type="text" id="genre" v-model="bookGenre" />

          <label for="description">Description:</label>
          <input type="text" id="description" v-model="bookDescription" />

          <button type="submit">Add the book</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from '@/includes/firebase'

export default {
  name: 'UserLibrary',
  data() {
    return {
      bookTitle: '',
      bookAuthor: '',
      bookGenre: '',
      bookDescription: ''
    }
  },
  methods: {
    async upload() {
      try {
        //create a reference to the Firebase storage
        const storageRef = storage.ref()

        //generate a uniue filename for the upload book
        const filename = `${Date.now()}_${this.bookTitle}.txt`

        //create a reference to the file in the storage
        const fileRef = storageRef.child(filename)

        //upload the book data as a text file
        await fileRef.putString(
          JSON.stringify({
            title: this.bookTitle,
            author: this.bookAuthor,
            genre: this.bookGenre,
            description: this.bookDescription
          }),
          'raw'
        )

        console.log('Book data uploaded successfully!')
        this.bookAuthor = ''
        this.bookDescription = ''
        this.bookGenre = ''
        this.bookTitle = ''
      } catch (error) {
        console.error('Error uploading book data:', error)
      }
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input[type='text'] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button[type='submit'] {
  background-color: rgb(133, 77, 14);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

button[type='submit']:hover {
  background-color: rgb(161, 91, 7);
}
</style>

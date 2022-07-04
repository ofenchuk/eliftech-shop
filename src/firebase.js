// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { child, get, getDatabase, ref, set } from 'firebase/database'

const firebaseConfig = initializeApp({
  apiKey: 'AIzaSyCkT2p32n1y4nb_rMeoeUOdCc-PhqtBc40',
  authDomain: 'eliftech-store.firebaseapp.com',
  databaseURL:
    'https://eliftech-store-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'eliftech-store',
  storageBucket: 'eliftech-store.appspot.com',
  messagingSenderId: '910745964668',
  appId: '1:910745964668:web:f75a3328cca0aa179379f9',
  measurementId: 'G-SMW8MEHZZZ',
})

// Initialize Firebase
const base = getDatabase(firebaseConfig)
export default base

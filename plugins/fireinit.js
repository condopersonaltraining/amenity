// global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'

var config = {
  apiKey: 'AIzaSyC1PfXP2hpl5hFG_MMT2qs-ourM8IT-1eM',
  authDomain: 'amenity-8ad96.firebaseapp.com',
  databaseURL: 'https://amenity-8ad96.firebaseio.com',
  projectId: 'amenity-8ad96',
  storageBucket: 'amenity-8ad96.appspot.com',
  messagingSenderId: '129250858534'
}

if (!firebase.apps.length) firebase.initializeApp(config)

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const DB = firebase.database()
export default firebase

import firebase from './Firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firestore = firebase.firestore()

function addDish() {
  return 0
}

function removeDish() {
  return 0
}

function client() {
  return 0
}

const api = {
  addDish,
  removeDish,
  client
}

export default api

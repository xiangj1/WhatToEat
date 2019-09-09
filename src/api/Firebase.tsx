import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/database'

import firebaseConfig from '../config/FirebaseConfig'

firebase.initializeApp(firebaseConfig)

// function isSignedIn() {
//   return new Promise(resolve => {
//     if (firebase.auth().currentUser) resolve(firebase.auth().currentUser)
//     else {
//       firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//           resolve(user)
//         } else {
//           resolve(null)
//         }
//       })
//     }
//   })
// }

export default firebase

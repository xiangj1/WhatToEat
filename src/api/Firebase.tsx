import firebase from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from '../config/FirebaseConfig'

firebase.initializeApp(firebaseConfig)

export default firebase

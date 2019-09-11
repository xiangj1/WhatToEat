import firebase from './Firebase'
import 'firebase/auth'

const auth = firebase.auth()

async function signIn(email: string, password: string): Promise<string> {
  const userCredential: firebase.auth.UserCredential = await auth.signInWithEmailAndPassword(email, password)

  return userCredential.user ? userCredential.user.uid : ''
}

async function signOut(): Promise<void> {
  return auth.signOut()
}

export default {
  signIn,
  signOut
}

import * as React from 'react'

import firebase from '../api/Firebase'

firebase
  .auth()
  .signInWithEmailAndPassword('xiangj1@outlook.com', 'Jx135790')
  .then(console.log)

const IndexPage = () => <h1>What to eat</h1>

export default IndexPage

import React, { useState } from 'react'

import firebase from '../api/Firebase'
import Client from '../api'

import SignInForm from '../components/SignInForm'

const client = Client()

function HomePage() {
  const [signedIn, setSignedIn] = useState(false)

  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    client.setUid(user ? user.uid : '')
    setSignedIn(!!user)
  })

  return (
    <div>
      <h1>What To Eat</h1>
      <SignInForm signedIn={signedIn} client={client} />
    </div>
  )
}

export default HomePage

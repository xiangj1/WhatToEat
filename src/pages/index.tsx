import React, { useState } from 'react'

import Container from '@material-ui/core/Container'

import firebase from '../api/Firebase'
import Client from '../api'

import SignInForm from '../components/SignInForm'
import Header from '../components/Header'

const client = Client()

function HomePage() {
  const [signedIn, setSignedIn] = useState(false)

  firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
    client.setUid(user ? user.uid : '')
    setSignedIn(!!user)
  })

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <SignInForm signedIn={signedIn} client={client} />
      </Container>
    </div>
  )
}

export default HomePage

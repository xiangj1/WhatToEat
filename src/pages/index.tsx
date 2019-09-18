import React, { useState } from 'react'

/* Material-UI */
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'

/* API */
import firebase from '../api/Firebase'
import Client from '../api'

/* Component */
import Header from '../components/Header'

const client = Client()

const theme = createMuiTheme({
  palette: {
    type: 'dark' // Switching the dark mode on is a single property value change.
  }
})

function HomePage() {
  const [init, setInit] = useState(true)
  const [username, setUsername] = useState('')

  if (init && typeof window !== 'undefined') {
    firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
      client.setUid(user ? user.uid : '')
      setUsername(user ? user.email || '' : '')
    })
    setInit(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header signedIn={!!username} signIn={client.signIn} signOut={client.signOut} username={username} />
    </ThemeProvider>
  )
}

export default HomePage

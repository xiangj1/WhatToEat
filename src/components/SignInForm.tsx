import React, { useState, ChangeEvent, FormEvent, MouseEvent, FunctionComponent } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Client from '../api'

interface SignInFormProps {
  signedIn: boolean
  client: Client
}

const SignInForm: React.FC<SignInFormProps> = ({ signedIn, client }: SignInFormProps) => {
  const [credential, setCredential] = useState({ email: '', password: '' })

  function updateInput(field: string) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault()

      setCredential({ ...credential, [field]: event.target.value })
    }
  }

  function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    client.signIn(credential.email, credential.password).catch(alert)
  }

  function signOut(event: MouseEvent) {
    event.preventDefault()

    client.signOut().catch(alert)
  }

  return signedIn ? (
    <Button variant="contained" color="primary" onClick={signOut}>
      Sign Out
    </Button>
  ) : (
    <form onSubmit={signIn}>
      <TextField
        required
        label="Email"
        type="email"
        margin="normal"
        variant="outlined"
        placeholder="me@example.com"
        autoComplete="username"
        onChange={updateInput('email')}
      />

      <TextField
        required
        label="Password"
        type="password"
        margin="normal"
        variant="outlined"
        placeholder="password"
        autoComplete="current-password"
        onChange={updateInput('password')}
      />

      <Button type="submit" variant="contained" color="primary">
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm

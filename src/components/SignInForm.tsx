import React, { useState, ChangeEvent, FormEvent } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      top: '20%',
      left: '40%',
      width: '20%',
      position: 'absolute',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    textField: {
      margin: '2%',
      display: 'block'
    },
    submitButton: {
      margin: '2%',
    },
  })
);

interface SignInFormProps {
  open: boolean
  signIn(email: string, password: string): Promise<string>
}

const SignInForm: React.FC<SignInFormProps> = ({ open, signIn }: SignInFormProps) => {
  const classes = useStyles()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  function updateEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function updatePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    signIn(email, password).catch(alert)
  }

  return (
    <Modal open={open}>
      <form onSubmit={submit} className={classes.modal}>
        <TextField
          required
          label="Email"
          type="email"
          variant="outlined"
          placeholder="me@example.com"
          autoComplete="username"
          onChange={updateEmail}
          className={classes.textField}
        />

        <TextField
          required
          label="Password"
          type="password"
          variant="outlined"
          placeholder="password"
          autoComplete="current-password"
          onChange={updatePassword}
          className={classes.textField}
        />

        <Button type="submit" variant="contained" color="primary" className={classes.submitButton}>
          Sign In
        </Button>
      </form>
    </Modal>
  )
}

export default SignInForm

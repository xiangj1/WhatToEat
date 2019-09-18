import React, { useState, ChangeEvent } from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
      padding: theme.spacing(2, 4, 3)
    },
    textField: {
      margin: '15px',
      display: 'block'
    },
    submitButton: {
      margin: '2%'
    }
  })
)

interface SignInFormProps {
  signIn(email: string, password: string): Promise<string>
}

const SignInForm: React.FC<SignInFormProps> = ({ signIn }: SignInFormProps) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function openForm() {
    setOpen(true)
  }

  function closeForm() {
    setOpen(false)
  }

  function updateEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function updatePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function submit() {
    signIn(email, password).catch(alert)
  }

  return (
    <div>
      <Button onClick={openForm}>Sign In</Button>
      <Dialog open={open} onClose={closeForm}>
        <DialogTitle>Welcome</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={submit} className={classes.submitButton}>
            SIGN IN
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SignInForm

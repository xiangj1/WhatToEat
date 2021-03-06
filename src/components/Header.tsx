import React from 'react'

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

import SignInForm from './SignInForm'

const useStyles = makeStyles({
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center'
  }
})

interface HeaderProps {
  signedIn: boolean
  username: string
  signIn(email: string, password: string): Promise<string>
  signOut(): Promise<void>
}

const Header: React.FC<HeaderProps> = ({ signedIn, username, signIn, signOut }) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <IconButton edge="start" color="inherit" className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          What to Eat
        </Typography>
        {signedIn ? (
          <div className={classes.userInfo}>
            <Typography variant="body1">{username}</Typography>
            <IconButton onClick={signOut} color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </div>
        ) : (
          <SignInForm signIn={signIn} />
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header

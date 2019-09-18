import React, {Component} from 'react'

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center'
  },
})

interface HeaderProps {
  signedIn: boolean
  username: string
  signIn(email: string, password: string): Promise<string>
  signOut(): Promise<void>
}


const Header: React.FC<HeaderProps> = ({signedIn, username, signOut}) => {
  const classes = useStyles()

  return (
    <AppBar position="static" color='inherit'>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          What to Eat
        </Typography>
        {signedIn ? (
          <div className={classes.userInfo}>
            <Typography variant="body1">{username}</Typography>
            <IconButton onClick={signOut} color="inherit"><ExitToAppIcon /></IconButton>
          </div>
        ) : (
            <Button>LOG IN</Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header

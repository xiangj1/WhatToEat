import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../logo.svg'

const useStyles = makeStyles({
  header: {
    width: '100%',
    color: 'white',
    display: 'block',
    height: '72px',
    padding: '8px 0'
  },
  nav: {
    margin: '0 auto',
    padding: '0 30px',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexWrap: 'wrap'
  },
  logo: {
    height: '100%'
  }
})

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography variant="overline" gutterBottom>
          What To Eat
        </Typography>
      </nav>
    </header>
  )
}

export default Header

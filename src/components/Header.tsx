import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Theme } from '@material-ui/core'

const styles = (theme: Theme) => ({
  root: {
    display: 'flex'
  }
})

const Header = ({ classes }: any) => {
  return <div className={classes.root}>What to eat</div>
}

export default withStyles(styles)(Header)

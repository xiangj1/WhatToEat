import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100%'
    // maxWidth: 500
  }
})

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        What To Eat
      </Typography>
    </div>
  )
}

export default Header

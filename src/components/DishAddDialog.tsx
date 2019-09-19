import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Dish } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rollButton: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: '3px',
      border: '0',
      color: 'white',
      height: '78px',
      padding: '0 60px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      fontSize: 'larger'
    }
  })
)

interface DishAddDialogProps {
  addDish(dishInfo: Dish): Promise<string>
  addTag(tag: string): Promise<void>
  getTagList(): Promise<string[]>
}

const DishAddDialog: React.FC<DishAddDialogProps> = ({ addDish, addTag, getTagList }) => {
  const classes = useStyles()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [name, setName] = useState('')
  const [tags, setTags] = useState<string[]>([])

  function openDialog() {
    setDialogOpen(true)
  }

  function closeDialog() {
    setDialogOpen(false)
  }

  function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function updateTags(e: React.ChangeEvent<HTMLInputElement>) {
    setTags([...tags, e.target.value])
  }

  return (
    <div>
      <IconButton onClick={openDialog}>
        <AddCircleIcon />
      </IconButton>
      <Dialog open={dialogOpen} onClose={closeDialog}>
        <DialogTitle>New Dish</DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">Dish Name</Typography>
          <TextField
            required
            value={name}
            placeholder="麻辣鸡丝儿"
            onChange={updateName}
            // className={classes.textField}
          />

          <Typography variant="subtitle1">Tags</Typography>
          <TextField
            required
            label="tag"
            variant="outlined"
            placeholder="password"
            // onChange={updatePassword}
            // className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DishAddDialog

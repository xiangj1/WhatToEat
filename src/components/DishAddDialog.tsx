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
    addTag: {
      display: 'flex',
      alignItems: 'center'
    }
  })
)

interface DishAddDialogProps {
  addDish(dishInfo: Dish): Promise<string>
  addTag(tag: string): Promise<string>
  getTagList(): Promise<string[]>
}

const DishAddDialog: React.FC<DishAddDialogProps> = ({ addDish, addTag, getTagList }) => {
  const classes = useStyles()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [name, setName] = useState('')
  const [tags, setTags] = useState<string[]>([])

  const [newTagShow, setNewTagShow] = useState(false)
  const [newTag, setNewTag] = useState('')

  function openDialog() {
    setDialogOpen(true)
  }

  function closeDialog() {
    setDialogOpen(false)
  }

  function newTagSwitch() {
    setNewTagShow(!newTagShow)
  }

  function updateName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value)
  }

  function updateTags(e: React.ChangeEvent<HTMLInputElement>) {
    setTags([...tags, e.target.value])
  }

  function addNewDish() {
    addDish({ id: Date.now(), name, tags }).catch(alert)
  }

  function addNewTag(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    addTag(newTag).catch(alert)
    setNewTag('')
    setNewTagShow(false)
  }

  function updateNewTag(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTag(e.target.value)
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

          <div className={classes.addTag}>
            <Typography variant="subtitle1">Tags</Typography>
            <IconButton onClick={newTagSwitch}>
              <AddCircleIcon />
            </IconButton>
            <form onSubmit={addNewTag} hidden={!newTagShow}>
              <TextField value={newTag} onChange={updateNewTag} />
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={addNewDish}>ADD</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DishAddDialog

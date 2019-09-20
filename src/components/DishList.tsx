import React, { useState } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

import { Dish } from '../types'

interface DishListProps {
  dishList: Dish[]
  removeDish(dishID: string): Promise<void>
  updateList(): void
}

const DishList: React.FC<DishListProps> = ({ dishList, removeDish, updateList }) => {
  function deleteDish(dishID: string) {
    return () => {
      removeDish(dishID).catch(alert)
      updateList()
    }
  }

  return (
    <List>
      {dishList.map((dish: Dish) => (
        <ListItem button key={dish.id}>
          <ListItemText primary={dish.name} secondary={dish.tags} />
          <IconButton onClick={deleteDish(dish.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  )
}

export default DishList

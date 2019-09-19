import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Dish } from '../types'

import DishAddDialog from './DishAddDialog'
import DishList from './DishList'

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

interface DishSectionProps {
  addDish(dishInfo: Dish): Promise<string>
  getDishList(): Promise<Dish[]>
  addTag(tag: string): Promise<void>
  getTagList(): Promise<string[]>
}

const DishSection: React.FC<DishSectionProps> = ({ addDish, getDishList, addTag, getTagList }) => {
  const classes = useStyles()

  const testDish: Dish = { id: Date.now(), name: 'testDish', tags: ['tag1'] }
  const [dishList, setDishList] = useState<Dish[]>([testDish])

  return (
    <div>
      <Button className={classes.rollButton}>Lets roll</Button>

      <Toolbar>
        <Typography variant="h6">Dish List</Typography>
        <DishAddDialog addDish={addDish} addTag={addTag} getTagList={getTagList} />
      </Toolbar>

      <DishList dishList={dishList} />
    </div>
  )
}

export default DishSection

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
      fontSize: 'larger',
      margin: theme.spacing(0)
    }
  })
)

interface DishSectionProps {
  addDish(dishInfo: Dish): Promise<string>
  removeDish(dishID: string): Promise<void>
  getDishList(): Promise<Dish[]>
  addTag(tag: string): Promise<string>
  getTagList(): Promise<string[]>
}

const DishSection: React.FC<DishSectionProps> = ({ addDish, removeDish, getDishList, addTag, getTagList }) => {
  const classes = useStyles()

  const [init, setInit] = useState(true)
  const [dishList, setDishList] = useState<Dish[]>([])

  function updateList() {
    setInit(true)
  }

  function letsRoll() {
    const dish = dishList[Math.floor(Math.random() * dishList.length)]
    alert(dish ? dish.name : '')
  }

  if (init) {
    setInit(false)
    getDishList().then(setDishList)
  }

  return (
    <div>
      <Button className={classes.rollButton} onClick={letsRoll}>
        Lets roll
      </Button>

      <Toolbar>
        <Typography variant="h6">Dish List</Typography>
        <DishAddDialog addDish={addDish} addTag={addTag} getTagList={getTagList} updateList={updateList} />
      </Toolbar>

      <DishList dishList={dishList} removeDish={removeDish} updateList={updateList} />
    </div>
  )
}

export default DishSection

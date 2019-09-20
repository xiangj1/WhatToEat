import React from 'react'

import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'

import { Dish } from '../types'

import DishSection from './DishSection'

const useStyles = makeStyles({
  bodyContainer: {
    padding: '5%'
  }
})

interface BodyProps {
  signedIn: boolean
  addDish(dishInfo: Dish): Promise<string>
  getDishList(): Promise<Dish[]>
  addTag(tag: string): Promise<string>
  getTagList(): Promise<string[]>
}

const Body: React.FC<BodyProps> = ({ signedIn, addDish, getDishList, addTag, getTagList }) => {
  const classes = useStyles()

  return (
    <Container className={classes.bodyContainer}>
      <Typography variant="h3">Its time to decide what should I eat today</Typography>
      {signedIn && <DishSection addDish={addDish} getDishList={getDishList} addTag={addTag} getTagList={getTagList} />}
    </Container>
  )
}

export default Body

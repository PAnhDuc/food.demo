import React from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContex'

const FoodDisplay = () => {

  const {food_list} = useContext(StoreContext)

  return (
    <div>

    </div>
  )
}

export default FoodDisplay
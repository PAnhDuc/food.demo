import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Appdownload from '../../components/Appdownload/Appdownload'

const Home = () => {

const [catetogry,setCategory] = useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu catetogry={catetogry} setCategory={setCategory}/>
      <FoodDisplay catetogry={catetogry}/>
      <Appdownload />
    </div>
  )
}

export default Home

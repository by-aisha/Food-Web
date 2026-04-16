import React, { useState } from 'react';
import './Home.css'
import Header from '../../components/Header/Header'
import EXploreMenu from '../../components/ExploreMenu/EXploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <EXploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home

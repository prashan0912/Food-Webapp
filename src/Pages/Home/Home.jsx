import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';
import Footer from '../../Components/Footer/Footer';
import Login from '../../Components/Login/Login';
export const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <div>

      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <Footer />
    </div>
  )
}
export default Home;
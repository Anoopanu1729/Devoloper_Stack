import React from 'react'
import LeftSidebar from '../../LeftSidebar/LeftSidebar'
import HomeMainbar from '../../HomeMaibar/HomeMainbar'
import RightSidebar from '../../RightSidebar/RightSidebar'
import '../../../App.css'
const Home = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar/>
       <div className="home-container-2">
        <HomeMainbar/>
        <RightSidebar/>
       </div>
    </div>
  )
}

export default Home
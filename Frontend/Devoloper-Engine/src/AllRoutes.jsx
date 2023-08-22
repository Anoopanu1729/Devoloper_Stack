import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './components/Pages/Auth/Auth'
import Home from './components/Pages/Home/Home'
import Questions from './components/Pages/Questions/Questions'
import AskQuestion from './components/Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './components/Pages/Questions/DisplayQuestion'
import Tags from './components/Tags/Tags'
import Ping from './components/Pages/Ping/Ping'
import Users from './components/Pages/Users/Users'
import UserProfile from './components/Pages/UserProfile/UserProfile'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />      
      <Route path='/Auth' element={<Auth/>} />
      <Route path='/Questions' element={<Questions/>} />
      <Route path='/AskQuestion' element={<AskQuestion/>} />
      <Route path='/Questions/:id' element={<DisplayQuestion/>} />
      <Route path='/Tags' element={<Tags/>} />
      <Route path='/ping' element={<Ping/>} />
      <Route path='/Users' element={<Users/>} />
      <Route path='/Users/:id' element={<UserProfile/>} />




    </Routes>
  )
}

export default AllRoutes
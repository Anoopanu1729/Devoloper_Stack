import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
import { useDispatch } from 'react-redux';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';




const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])






  return (
    <div className="app">
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </div>
  )
}

export default App
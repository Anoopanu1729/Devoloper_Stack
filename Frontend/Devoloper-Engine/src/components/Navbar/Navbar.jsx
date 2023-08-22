import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logo from '../../assets/logo.jpg'
import search from '../../assets/serach.svg'
import Avatar from '../../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from "../../actions/currentUser";
import decode from "jwt-decode";





function Navbar() {

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate()


  
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    dispatch(setCurrentUser(null));
    navigate("/");
  };



  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  }, [User?.token,dispatch])



  return (
    <nav className='main-nav'>
      <div className='navbar'>
        <Link to='/' className=' nav-logo'>
          <img style={{ width: '150px' }} src={logo} alt='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Product</Link>
        <Link to='/' className='nav-item nav-btn'>Term</Link>
        <form >
          <input type="text" placeholder='search...' />
          <img style={{ width: '18px' }} src={search} alt='search' className='search-icon' />
        </form>
        {
          User === null ?
            <Link to='/Auth' className='nav-item nav-links'>LOGIN</Link> :
            <>
              <Avatar backgroundColor='blue' px='8px' py='8px' borderRadius='25px' > <Link to={`/Users/${User?.result?._id}`} style={{ color: 'white', textDecoration: 'none' }} className=''> {User.result.name.charAt(0).toUpperCase()} </Link></Avatar>
              <button onClick={handleLogout} className='nav-item nav-links  '>Logout</button>
            </>

        }


      </div>
    </nav>


  )
}

export default Navbar
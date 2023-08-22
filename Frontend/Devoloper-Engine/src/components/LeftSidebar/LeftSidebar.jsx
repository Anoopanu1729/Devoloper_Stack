import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import text from '../../assets/text.png'
import job from '../../assets/job.png'
import group from '../../assets/group.png'



const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p>HOME</p>
        </NavLink>

        <div className="side-nav-div">
          <div><p>PUBLIC</p>
          </div>


          <NavLink to='/Questions' className='side-nav-links' activeclassname='active' style={{ paddingLeft: '13px' }}>
            <img style={{ width: '20px' }} src='https://i.postimg.cc/xTycKt6w/pin.png' alt="" />
            <p style={{ paddingLeft: '10px' }}>Questions</p>
          </NavLink>

          <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{ paddingLeft: '40px' }}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{ paddingLeft: '40px' }}>
            <p >Users</p>
          </NavLink>
        </div>
        <div className="side-nav-div">
          <div><p>SOCIAL</p>
          </div>


          <NavLink to='/ping' className='side-nav-links' activeclassname='active' style={{ paddingLeft: '13px' }}>
          <img style={{ width: '25px' }} src={text} alt="" />
            <p style={{ paddingLeft: '10px' }}>Ping</p>
          </NavLink>

          <NavLink to='/jobs' className='side-nav-links' activeclassname='active' style={{ paddingLeft: '13px' }}>
              <img style={{ width: '25px' }} src={job} alt="" />
            <p style={{ paddingLeft: '10px' }}>Jobs</p>
          </NavLink>
          <NavLink to='/group' className='side-nav-links' activeclassname='active' style={{ paddingLeft: '13px' }}>
              <img style={{ width: '25px' }} src={group} alt="" />
            <p style={{ paddingLeft: '10px' }} >Group</p>
          </NavLink>
        </div>
      </nav>



    </div>





  )
}

export default LeftSidebar
import React from 'react'
import pen from '.././../assets/pen.png'
import chat from '.././../assets/chat.png'
import abc from '.././../assets/abc.png'


import './RightSidebar.css'



const Widget = () => {
  return (
    <div className="widget">
      <div className='widget-h4-div'>
        <h4>Devoloper's Notes</h4>
      </div>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pin" width='22' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum similique labore</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pin" width='22' />
          <p>Lorem ipsum dolor veniam, laborum similique labore</p>
        </div>
      </div>
      <div className='widget-h4-div'>
        
        <h4>Top Articles </h4>

      </div>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={chat} alt="pin" width='22' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum similique labore</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={chat} alt="pin" width='22' />
          <p>Lorem ipsum dolor veniam, laborum similique labore</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={abc} alt="pin" width='22' />
          <p>Lorem ipsum dolor veniam, laborum similique labore</p>
        </div>
      </div>

      <div className='widget-h4-div'>

        <h4>Achivements </h4>
      </div>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>35</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum similique labore</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>35</p>
          <p>Lorem ipsum dolor veniam, laborum similique labore</p>
        </div>
        <div className="right-sidebar-div-2">
          <p>21</p>
          <p>Lorem ipsum dolor veniam, laborum similique labore</p>
        </div>
      </div>
    </div>
  )
}

export default Widget
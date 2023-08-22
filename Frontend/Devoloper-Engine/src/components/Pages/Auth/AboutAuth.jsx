import React from 'react'
import logo from '../../../assets/abc.png'
import text from '../../../assets/text.png'
import con from '../../../assets/conversation.png'
import job1 from '../../../assets/jo.png'
import inst from '../../../assets/noodles.png'
import reputation from '../../../assets/reputation.png'





function AboutAuth() {
  return (

    <div className="auth-container-1">
      <div className="">
        
        {/* <img style={{ width: '100px' }} src={logo} alt="" /> */}
      </div>


      <div className='side-nav-links3' style={{ paddingLeft: '13px' }}>
        <img style={{ width: '25px' }} src={con} alt="" />
        <h3 style={{ paddingLeft: '15px' }}>Join Devoloper Community</h3>
      </div>

      <div className='side-nav-links3' style={{ paddingLeft: '13px' }}>
        <img style={{ width: '25px' }} src={inst} alt="" />
        <p style={{ paddingLeft: '15px' }}>Post It-Simply Resolve It</p>
      </div>

      <div className='side-nav-links3' style={{ paddingLeft: '13px' }}>
        <img style={{ width: '25px' }} src={job1} alt="" />
        <p style={{ paddingLeft: '15px' }}>Find Your Future Jobs</p>
      </div>
      <div className='side-nav-links3' style={{ paddingLeft: '13px' }}>
        <img style={{ width: '25px' }} src={reputation} alt="" />
        <p style={{ paddingLeft: '15px' }}>Earn reputation and badges</p>
      </div>


    
      
      <p style={{ fontSize: '13px', color: '#666767' }}>Collaborate and share knowledge with a private group for FREE.</p>
      <p style={{ fontSize: '13px', color: '#007ac6' }}>Get Stack Overflow for Teams free for up to 50 users.</p>
    </div>


  )
}

export default AboutAuth
import React, { useState } from 'react'
import icon from '../../../assets/abc.png'
import AboutAuth from './AboutAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Auth.css'
import { login, signup } from '../../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignup) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };







  return (
    <section class='auth-section '>
      {
        isSignup && <AboutAuth />
      }
      <div class="auth-container-2">
        {!isSignup && <img src={icon} alt='Devoloper stack' className='login-logo' />}
        <form onSubmit={handleSubmit}>

          {
            isSignup && (
              <label>
                <h4>Display Name</h4>
                <input type="text" id='name' name='name' onChange={(e) => { setName(e.target.value) }} />
              </label>
            )
          }
          <label htmlFor='Email'>
            <h4>Email</h4>
            <input type="text" name='Email' id='Email' onChange={(e) => { setEmail(e.target.value) }} />
          </label>
          <label htmlFor='Password'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4 >Password</h4>
              {!isSignup && <p style={{ color: '#007ac6', fontSize: '13px', cursor: 'pointer' }}>Forgot Password</p>}
            </div>
            <input type="Password" name='Password' id='Password' onChange={(e) => { setPassword(e.target.value) }} />

            {isSignup && <p style={{ color: '#666776', fontSize: '13px' }}>Passwords must contain at least eight characters, <br /> including at least 1 letter and 1 number. </p>}
          </label>
          {
            isSignup && (
              <label htmlFor='check'>
                <input type="checkbox" id='check' />
                <p style={{ fontSize: '13px' }}>
                  Opt-in to receive occasional product <br /> updates, user research invitations,<br /> company announcements, and digests.
                </p>

              </label>
            )
          }
          <button type='submit' className='auth-btn'>{isSignup ? 'Sign Up' : 'Log In'}</button>

          {
            isSignup && (
              <p style={{ color: '#666776', fontSize: '13px' }}>
                By clicking “Sign up”, you agree to
                <span style={{ color: '#007ac6' }}> our terms of <br /> service </span>and acknowledge that you have
                <span style={{ color: '#007ac6' }}> read and <br /> understand </span>our
                <span style={{ color: '#007ac6' }}> privacy policy</span> and code of <br /> conduct.
              </p>
            )
          }
        </form>
        <p>
          {isSignup ? 'Already have an Account?' : "Don't have an Account"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "Log In" : "Sign Up"}</button>
        </p>
      </div>

    </section>

  )
}

export default Auth
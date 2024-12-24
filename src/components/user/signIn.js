import React from 'react'
import "../user/../Style/SignIn.css";
export default function signIn() {
  return (
    <div className='signIn_Container'>
      <form className='signIn_form'>
      <h1 className='signIn_title'>Log In</h1>

        <div className='sigIn_details'>
          <label>Email:</label>
          <input type='email' id="email" name='email' required />
        </div>
        <div className='sigIn_details'>
          <label>Password:</label>
          <input type='password' id="password" name='password' required/>
        </div>

        <div className='sigIn_details_checkBox_details'>
          <input type='checkbox'/>
          <label>Remember Me</label>
        </div>
        <button className='signIn-button' >Login</button>
        <span><a href='#'>Forgot password?</a></span>

      {/* 👇️ horizontal line with text */}
      <div style={{display:"flex", justifyContent :"center"}}>
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width:'100%' }}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '70px', textAlign: 'center'}}>OR</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
      </div>
        <p className='SignIn_message'>Sign In Using Your Account With </p>
        <div className='SignInOption_btn'>
          <button className='signIn_byFb-button'>Google</button>
          <button className='signIn_byGoogle--button'>Facebook</button>
        </div>
      </form>
    </div>
  )
}

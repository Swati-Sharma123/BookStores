import React from 'react';
import "../../../src/components/Style/ForgotPassword.css";
export default function ForgotPassword() {
  return (
    <div className='forgotPassword_container'>
    <h2>Forgot Password</h2> 
        <form className='forgotPassword_form'>
            <span className='forgotPassword_details'>Email:
            <input/>
            </span>
           
            <div>
                <button className='forgotPassword_btn'>Get New Password</button>
            </div>
        </form>
    </div>
  )
}

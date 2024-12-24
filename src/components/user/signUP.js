import React from 'react';
import "./../Style/SignUp.css";
export default function SignUp() {
  return (
    <div className="signup-container">
      <form className="signUp-form">
        <h2 className="form-title">Sign Up</h2>

        <div className="form-group">
          <label className="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Re-enter Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Re-enter your password"
            required
          />
        </div>

        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" name="terms" required />
          <label htmlFor="terms">
            I agree to the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}

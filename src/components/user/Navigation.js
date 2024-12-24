import React from 'react';
import { IoSearchSharp } from "react-icons/io5";
import "../Style/Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation_container">
      <div className="nav-search-box">
        <input 
          type="text" 
          placeholder="Search" 
          className="nav-search"
        />
        <IoSearchSharp className="nav-search-icon" />
      </div>
      <div className="nav-btn">
        <button className="nav-login-btn">Log In</button>
        <button className="nav-signup-btn">Sign Up</button>
      </div>
    </div>
  );
}

import React from 'react';
import "../Style/HeroSection.css";
import { Link } from 'react-router-dom';
import Carousal from './Carousal';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero_seller">
          <p>Best Seller in...</p>
          <ul className=''>
            <li>
              <Link to="/just-arrived" className=''>Love</Link>
            </li>
            <li>
              <Link to="/just-arrived" className=''>Science</Link>
            </li>
            <li>
              <Link to="/just-arrived" className=''>Medicine</Link>
            </li>
            <li>
              <Link to="/just-arrived" className=''>Business</Link>
            </li>
            <li>
              <Link to="/just-arrived" className=''>History</Link>
            </li>
            <li>
              <Link to="/just-arrived" className=''>Religion</Link>
            </li>
            <li>
              <Link to="/just-arrived" className=''>Technology</Link>
            </li>
        </ul>
        </div>
        <div className="hero-heading">
          <ul className='hero-ul-list'>
            <li>
              <Link to="/just-arrived" className='hero-link'>Just Arrived</Link>
            </li>
            <li>
              <Link to="/best-sellers"className='hero-link'>Best Sellers</Link>
            </li>
            <li>
              <Link to="/top-rated" className='hero-link'>Top Rated</Link>
            </li>
            <li>
              <Link to="/upcoming" className='hero-link'>Upcoming</Link>
            </li>
          </ul>
          <div className='hero-crousal'>
            <Carousal/>
          </div>
        </div>
      </div>
    </div>
  );
}

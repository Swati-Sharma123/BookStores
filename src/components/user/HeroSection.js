import React from 'react';
import "../Style/HeroSection.css";
import { Link } from 'react-router-dom';
import Carousal from './Carousal';
import BookList from './BookList';

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero_seller">
          <p>Best Seller in...</p>
          <ul className="hero_seller-details">
            <li>
              <Link to="/just-arrived" className="hero_seller-points">Love</Link>
            </li>
            <li>
              <Link to="/just-arrived" className="hero_seller-points">Science</Link>
            </li>
            <li>
              <Link to="/just-arrived" className="hero_seller-points">Medicine</Link>
            </li>
            <li>
              <Link to="/just-arrived" className="hero_seller-points">Business</Link>
            </li>
            <li>
              <Link to="/just-arrived" className="hero_seller-points">History</Link>
            </li>
            <li>
              <Link to="/just-arrived" className="hero_seller-points">Religion</Link>
            </li>
            <li>
              <Link to="/just-arrived" className="hero_seller-points">Technology</Link>
            </li>
          </ul>
        </div>
        <div className="hero-heading">
          <ul className="hero-ul-list">
            <li>
              <Link to="/just-arrived" className="hero-link">Just Arrived</Link>
            </li>
            <li>
              <Link to="/best-sellers" className="hero-link">Best Sellers</Link>
            </li>
            <li>
              <Link to="/top-rated" className="hero-link">Top Rated</Link>
            </li>
            <li>
              <Link to="/upcoming" className="hero-link">Upcoming</Link>
            </li>
          </ul>
          <div className="hero-carousel">
            <Carousal />
          </div>
        </div>
      </div>
      <BookList/>
    </div>
  );
}

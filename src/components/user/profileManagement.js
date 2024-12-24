import React from 'react';
import "../../components/Style/ProfileManagement.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

export default function ProfileManagement() {
  return (
    <div className="profile-management-container">
      <div className="profile-header-section">
        <h1 >Book Shopping</h1>
        <div className="profile-icon-group">
          <IoMdNotificationsOutline size={40} className="notification-icon" />
          <FaSearch size={40} />
        </div>
      </div>

      <div className="profile-user-section">
        <h1>Hello, William</h1>
        <CgProfile size={53} />
      </div>

      <div className="profile-details-section">
        <div className="profile-details-item">Your Orders</div>
        <div className="profile-details-item">Buy Again</div>
      </div>

      <div className="profile-details-section">
        <div className="profile-details-item">Your Accounts</div>
        <div className="profile-details-item">Your Lists</div>
      </div>

      <div className="profile-orders-section">
        <h2>Your Orders</h2>
        <a href="#">See all</a>
      </div>
    
      <div className="">
        <h2>Keep Shopping</h2>
      </div>
    </div>
  );
}

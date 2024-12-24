import React from "react";
import "../../components/Style/Header.css";
import { FcAddressBook } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header-logo">
        <FcAddressBook size={90} />
      </div>

      <ul className="header-navigation">
        <li className="header-link">
          <Link to="/">HOME</Link>
        </li>
        <li className="header-link">
          <Link to="/categories">CATEGORIES</Link>
        </li>
        <li className="header-link">
          <Link to="/ebooks">E-BOOKS</Link>
        </li>
        <li className="header-link">
          <Link to="/author">AUTHOR</Link>
        </li>
        <li className="header-link">
          <Link to="/blog">BLOG</Link>
        </li>
        <li className="header-link">
          <Link to="/contactus">CONTACT US</Link>
        </li>
      </ul>

      <div className="header-profile">
        <CgProfile size={53} />
      </div>
    </header>
  );
}

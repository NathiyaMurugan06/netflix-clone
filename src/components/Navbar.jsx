import React from 'react';
import './Navbar.css'; // We'll style it separately

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/netflix-logo.png" alt="Netflix" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <span>|</span>
        <li>TV Shows</li>
        <span>|</span>
        <li>Movies</li>
        <span>|</span>
        <li>Latest</li>
        <span>|</span>
        <li>My List</li>
        </ul>

      <div className="profile">
        <img src="/assets/user-icon.png" alt="User" />
      </div>
    </nav>
  );
};

export default Navbar;

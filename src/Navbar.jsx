import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">salakari.org</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Me</Link>
        </li>
        <li>
          <a href="https://ollis.medium.com/">Blog</a>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

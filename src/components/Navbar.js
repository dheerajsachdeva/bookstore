import React from 'react';
import { NavLink } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => (
  <div className="navbar">
    <div className="section1">
      <div className="heading">BookStore CMS</div>
      <div>
        <ul>
          <NavLink className="links" to="/">BOOKS</NavLink>
          <NavLink className="links" to="/categories">CATEGORIES</NavLink>
        </ul>
      </div>
    </div>
    <span><CgProfile className="profile" /></span>
  </div>
);

export default Navbar;

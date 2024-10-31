import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/marketplace">Marketplace</Link>
  </nav>
);

export default NavBar;

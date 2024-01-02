import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Link your CSS file for header styles
import LogoImage from '../IMG/Logo.png';

const Header = () => {
  return (
    <header className="header"> 
      <div className="header-left">
        <img src={LogoImage} alt="Logo" className="logo-image" />
      </div>
      <div className="header-right">
        <Link to="/signin" className="home-btn">SignIn</Link>
        <Link to="/signup" className="home-btn">SignUp</Link>
      </div>
    </header>
  );
};

export default Header;

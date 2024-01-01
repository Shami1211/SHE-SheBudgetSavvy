import React from 'react';
import './Header.css'; // Link your CSS file for header styles
import LogoImage from '../IMG/Logo.png';

const Header = () => {
  return (
    <header className="header"> 
      <div className="header-left">
        <img src={LogoImage} alt="Logo" className="logo-image" />
        
      </div>
      <div className="header-right">
        <a href="#" className="home-btn">SignIn</a> {/* Changed text to "SignIn" */}
        <a href="#" className="home-btn">SignUp</a> {/* Changed text to "SignUp" */}
      </div>
    </header>
  );
};

export default Header;

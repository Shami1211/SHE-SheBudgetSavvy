// Footer.jsx
import React from 'react';
import './Footer.css'; // Link your CSS file for footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} SheBudgetSavvy. All Rights Reserved.</p>
        <nav className="footer-nav">
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

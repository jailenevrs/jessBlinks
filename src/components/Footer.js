import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import '../components/Footer.css';

function Footer() {
  return (
    <div className="container">
    <div className="content">
      {/* Your main content goes here */}
    </div>
    <footer className="footer">
      <div className="footer-container">
        <h3>Contact Me</h3>
        <div className="icon-wrapper">
          <a className="icon-link" href="https://www.instagram.com/jessluxelashes">
            <InstagramIcon className="icon" />
          </a>
          <a className="email-icon" href="mailto:Jessicalashes@gmail.com">
            <EmailIcon className="email-icon" />
          </a>
        </div>
        <p className="email">Jessicalashes@gmail.com</p>
      </div>
    </footer>
  </div>
  
  
  );
}

export default Footer;

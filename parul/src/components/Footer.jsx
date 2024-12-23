import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <h2 className="footer-title">CVSYNC</h2>
        <p>9080706050</p>
        <p>info@cVSync.com</p>
        <p>veer surendra sai university of technology</p>
      </div>
      <div className="footer-right">
        <h3>Stay Connected</h3>
        <form className="subscribe-form">
          <label htmlFor="email">Enter Your Email *</label>
          <div className="subscribe-input">
            <input type="email" id="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </div>
        </form>
        <p className="contact-us">Contact Us</p>
      </div>
    </div>
  );
};

export default Footer;

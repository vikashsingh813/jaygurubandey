import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const handlePrivacyClick = () => {
    window.location.href = "/privacy-policy";
  };

  const handleCommitteeClick = () => {
    window.location.href = "/committee-members";
  };

  const handleBooksClick = () => {
    window.location.href = "/published-books";
  };

  const handleUpdatesClick = () => {
    window.location.href = "/latest-updates";
  };

  const handleSoulTwistClick = () => {
    window.location.href = "/soultwist";
  };

  const handleFAQClick = () => {
    window.location.href = "/faq";
  };

  return (
    <footer className="footer">
      <div className="container footer-content">

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} जय गुरुबंदे। सर्वाधिकार सुरक्षित।</p>

          {/* Button Links (Centered) */}
          <div className="footer-links">
            <span className="privacy-link" onClick={handlePrivacyClick}>
              गोपनीयता नीति
            </span>
            <span className="privacy-link" onClick={handleCommitteeClick}>
              समिति सदस्य
            </span>
            <span className="privacy-link" onClick={handleBooksClick}>
              प्रकाशित पुस्तकें
            </span>
            <span className="privacy-link" onClick={handleUpdatesClick}>
              ताज़ा अपडेट्स
            </span>
            <span className="privacy-link" onClick={handleSoulTwistClick}>
              सोलट्विस्ट
            </span>
            <span className="privacy-link" onClick={handleFAQClick}>
              सामान्य प्रश्न
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="social-links">
          <a
            href="https://www.facebook.com/share/g/1AZvFisxcs/"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy"
            className="instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@jaigurubande?feature=shared"
            className="youtube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

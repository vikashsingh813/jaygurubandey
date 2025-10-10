import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const handlePrivacyClick = () => {
    window.location.href = '/privacy-policy'; // हमेशा पेज के ऊपर जाए
  };

  const handleCommitteeClick = () => {
    window.location.href = '/committee-members'; // समिति सदस्यों के पेज पर जाएँ
  };

  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} जय गुरु बंदे . सभी अधिकार सुरक्षित .</p>
          <span
            className="privacy-link"
            onClick={handlePrivacyClick}
            style={{ cursor: 'pointer', marginRight: '15px' }}
          >
            गोपनीयता नीति
          </span>
          <span
            className="privacy-link"
            onClick={handleCommitteeClick}
            style={{ cursor: 'pointer' }}
          >
            समिति सदस्य
          </span>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/share/g/1AZvFisxcs/" className="facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy" className="instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@jaigurubande?feature=shared" className="youtube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD" className="whatsapp" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

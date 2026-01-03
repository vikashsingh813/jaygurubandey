import React, { useState } from "react";
import "./StayConnected.css";
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    id: "facebook",
    label: "फेसबुक",
    url: "https://www.facebook.com/share/g/1AZvFisxcs/",
    icon: <FaFacebook />,
  },
  {
    id: "instagram",
    label: "इंस्टाग्राम",
    url: "https://www.instagram.com/jaigurubande__official?igsh=NnIwdnI5cGMxemYy",
    icon: <FaInstagram />,
  },
  {
    id: "youtube",
    label: "यूट्यूब",
    url: "https://youtube.com/@jaigurubande?feature=shared",
    icon: <FaYoutube />,
  },
  {
    id: "whatsapp",
    label: "व्हाट्सएप समूह",
    url: "https://chat.whatsapp.com/GwdDS530clKJsNc4zkPCyD",
    icon: <FaWhatsapp />,
  },
];

const StayConnected = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleOpenPopup = () => {
    setSelectedLink(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedLink(null);
  };

  const handleOptionClick = (id) => {
    setSelectedLink(id);
  };

  const openSelectedLink = () => {
    if (!selectedLink) return;

    const link = SOCIAL_LINKS.find((l) => l.id === selectedLink);
    if (link) {
      window.open(link.url, "_blank", "noopener,noreferrer");
    }

    setShowPopup(false);
    setSelectedLink(null);
  };

  return (
    <div className="stay-page">
      <div className="stay-inner">
        <p className="stay-badge">⿨ आश्रम सोशल मीडिया लिंक 🌐</p>

        <h1 className="stay-title">गुरुजी से ऑनलाइन जुड़े रहें</h1>
        <p className="stay-subtitle">
          जिस सोशल प्लेटफॉर्म को खोलना चाहते हैं, उसे चुनें।
        </p>

        <div className="stay-card">
          <ul className="social-list">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.id} className="social-item">
                <div className="social-left">
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-label">{link.label}</span>
                </div>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-view-btn"
                >
                  खोलें
                </a>
              </li>
            ))}
          </ul>

          {/* POPUP TRIGGER BUTTON */}
          <button
            className="open-all-btn"
            onClick={handleOpenPopup}
          >
            सोशल प्लेटफॉर्म चुनें
          </button>
        </div>
      </div>

      {/* ===== POPUP MODAL ===== */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>सोशल लिंक चुनें</h2>

            <div className="popup-options">
              {SOCIAL_LINKS.map((link) => (
                <div
                  key={link.id}
                  className={`popup-option ${
                    selectedLink === link.id ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(link.id)}
                >
                  {link.icon} {link.label}
                </div>
              ))}
            </div>

            <div className="popup-actions">
              <button
                className="popup-btn cancel"
                onClick={handleClosePopup}
              >
                रद्द करें
              </button>

              <button
                className="popup-btn open"
                onClick={openSelectedLink}
                disabled={!selectedLink}
              >
                चयनित लिंक खोलें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StayConnected;

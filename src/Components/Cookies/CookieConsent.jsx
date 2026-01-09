import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

/* ===== Cookie Helpers ===== */
const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

  /* ===== Check cookie on load ===== */
  useEffect(() => {
    const consent = getCookie("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  /* ===== Accept / Reject ===== */
  const handleConsent = (choice) => {
    if (choice === "accept") {
      setCookie("cookieConsent", "accepted", 365);
      setCookie(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: true,
          marketing: true,
        }),
        365
      );
    }

    if (choice === "reject") {
      setCookie("cookieConsent", "rejected", 365);
      setCookie(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: false,
          marketing: false,
        }),
        365
      );
    }

    setVisible(false);
  };

  /* ===== Save Custom Preferences ===== */
  const handleSavePreferences = () => {
    setCookie("cookieConsent", "customised", 365);
    setCookie("cookiePreferences", JSON.stringify(preferences), 365);
    setShowModal(false);
    setVisible(false);
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!visible) return null;

  return (
    <>
      {/* ===== मुख्य कुकी पॉपअप ===== */}
      <div className="cookie-popup">
        <div className="cookie-content">
          <h3>हम आपकी गोपनीयता का सम्मान करते हैं</h3>
          <p>
            हम आपके ब्राउज़िंग अनुभव को बेहतर बनाने, वेबसाइट ट्रैफ़िक का विश्लेषण
            करने और सामग्री को वैयक्तिकृत करने के लिए कुकीज़ का उपयोग करते हैं।
            आप किसी भी समय अपनी प्राथमिकताएँ बदल सकते हैं।
          </p>
          <div className="cookie-buttons">
            <button
              className="customise-btn"
              onClick={() => setShowModal(true)}
            >
              अनुकूलित करें
            </button>
            <button
              className="reject-btn"
              onClick={() => handleConsent("reject")}
            >
              सभी अस्वीकार करें
            </button>
            <button
              className="accept-btn"
              onClick={() => handleConsent("accept")}
            >
              सभी स्वीकार करें
            </button>
          </div>
        </div>
      </div>

      {/* ===== अनुकूलन मोडल ===== */}
      {showModal && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <h3>अपनी कुकी प्राथमिकताएँ अनुकूलित करें</h3>
            <p>चुनें कि आप किन प्रकार की कुकीज़ की अनुमति देना चाहते हैं:</p>

            <div className="cookie-option">
              <label>
                <input type="checkbox" checked disabled readOnly />
                <span>फ़ंक्शनल कुकीज़ (आवश्यक)</span>
              </label>
            </div>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference("analytics")}
                />
                <span>एनालिटिक्स कुकीज़</span>
              </label>
            </div>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference("marketing")}
                />
                <span>मार्केटिंग कुकीज़</span>
              </label>
            </div>

            <div className="modal-buttons">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                रद्द करें
              </button>
              <button className="save-btn" onClick={handleSavePreferences}>
                प्राथमिकताएँ सहेजें
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;

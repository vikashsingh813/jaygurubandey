import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState({
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice) => {
    if (choice === "accept") {
      localStorage.setItem("cookieConsent", "accepted");
      localStorage.setItem(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: true,
          marketing: true,
        })
      );
    } else if (choice === "reject") {
      localStorage.setItem("cookieConsent", "rejected");
      localStorage.setItem(
        "cookiePreferences",
        JSON.stringify({
          functional: true,
          analytics: false,
          marketing: false,
        })
      );
    }
    setVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", "customised");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));
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
            हम आपके ब्राउज़िंग अनुभव को बेहतर बनाने, व्यक्तिगत विज्ञापन या
            सामग्री प्रदान करने और हमारी वेबसाइट ट्रैफ़िक का विश्लेषण करने के लिए
            कुकीज़ का उपयोग करते हैं। "सभी स्वीकार करें" पर क्लिक करके, आप हमारे
            कुकी उपयोग की सहमति देते हैं।
          </p>
          <div className="cookie-buttons">
            <button className="customise-btn" onClick={() => setShowModal(true)}>
              अनुकूलित करें
            </button>
            <button className="reject-btn" onClick={() => handleConsent("reject")}>
              सभी अस्वीकार करें
            </button>
            <button className="accept-btn" onClick={() => handleConsent("accept")}>
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
            <p>चुनें कि आप कौन-सी प्रकार की कुकीज़ की अनुमति देना चाहते हैं:</p>

            <div className="cookie-option">
              <label>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  disabled
                  readOnly
                />
                <span>फ़ंक्शनल कुकीज़ (आवश्यक)</span>
              </label>
              <p className="desc">
                ये कुकीज़ वेबसाइट को सही तरीके से काम करने के लिए आवश्यक हैं।
              </p>
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
              <p className="desc">
                ये हमें यह समझने में मदद करती हैं कि आप हमारी साइट का उपयोग कैसे करते हैं ताकि हम इसे बेहतर बना सकें।
              </p>
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
              <p className="desc">
                इनका उपयोग व्यक्तिगत विज्ञापन और सामग्री दिखाने के लिए किया जाता है।
              </p>
            </div>

            <div className="modal-buttons">
              <button className="cancel-btn" onClick={() => setShowModal(false)}>
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

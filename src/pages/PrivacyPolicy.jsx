import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-container">
        <h1 className="fade-in">गोपनीयता नीति</h1>
        <p className="fade-in delay-1">
          आपकी गोपनीयता हमारे लिए महत्वपूर्ण है। यह गोपनीयता नीति बताती है कि हम
          आपकी व्यक्तिगत जानकारी को कैसे एकत्रित, उपयोग और सुरक्षित रखते हैं।
        </p>

        <div className="policy-section fade-in delay-2">
          <h2>हम कौन सी जानकारी एकत्रित करते हैं</h2>
          <p>
            जब आप हमारी सेवाओं के साथ इंटरैक्ट करते हैं तो हम आपका नाम, ईमेल और
            फ़ोन नंबर जैसी व्यक्तिगत जानकारी एकत्रित कर सकते हैं।
          </p>
        </div>

        <div className="policy-section fade-in delay-3">
          <h2>हम आपकी जानकारी का उपयोग कैसे करते हैं</h2>
          <p>
            हम आपकी जानकारी का उपयोग अपनी सेवाओं को बेहतर बनाने, आपके प्रश्नों का
            उत्तर देने और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए करते हैं।
          </p>
        </div>

        <div className="policy-section fade-in delay-4">
          <h2>डेटा सुरक्षा</h2>
          <p>
            हम आपकी जानकारी की सुरक्षा के लिए उचित सुरक्षा उपाय लागू करते हैं।
            हालाँकि, इंटरनेट पर डेटा का आदान-प्रदान 100% सुरक्षित नहीं होता है।
          </p>
        </div>

        <div className="policy-section fade-in delay-5">
          <h2>हमसे संपर्क करें</h2>
          <p>
            यदि आपको इस गोपनीयता नीति के बारे में कोई प्रश्न है, तो कृपया हमें
            इस ईमेल पर संपर्क करें:
            <span className="highlight"> support@example.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

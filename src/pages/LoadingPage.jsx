import React from "react";
import "./LoadingPage.css";
import circle from "../assets/circle.png"; // आपका चित्र

const LoadingPage = () => {
  return (
    <div className="loading-page">
      {/* कणों की पृष्ठभूमि */}
      <div className="particles"></div>

      {/* चमकता हुआ गोला */}
      <div className="orb-wrapper">
        <img src={circle} alt="लोड हो रहा है..." className="loading-circle" />
      </div>

      {/* एनिमेटेड टेक्स्ट */}
      <div className="loading-text">
        <h1 className="main-text">🌸 गुरूजी की कृपा में समर्पण करें 🌸</h1>
        <p className="sub-text">
          समर्पण में शांति है, और शांति में ही दिव्यता का वास है।
        </p>
        <div className="dots">...</div>
      </div>
    </div>
  );
};

export default LoadingPage;

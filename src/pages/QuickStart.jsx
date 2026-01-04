import React from "react";
import { useNavigate } from "react-router-dom";
import "./QuickStart.css";

const QuickStart = () => {
  const navigate = useNavigate();

  const quickLinks = [
    {
      id: 1,
      label: "होम",
      emoji: "🏠",
      description:
        "गुरुजी की कृपा, आशीर्वाद और आश्रम की नवीनतम जानकारियों के दिव्य संसार में प्रवेश करें।",
      path: "/",
      tag: "सबसे अधिक देखा गया",
    },
    {
      id: 2,
      label: "गुरुजी के बारे में",
      emoji: "ℹ️",
      description:
        "गुरुजी की शिक्षाएँ शांति, भक्ति और सार्थक जीवन के मार्ग को प्रकाशित करती हैं।",
      path: "/about",
      tag: "दिव्य मार्गदर्शन",
    },
    {
      id: 3,
      label: "दैनिक सत्संग",
      emoji: "🔅",
      description:
        "प्रतिदिन का सत्संग जो गुरुजी से जुड़ाव, शांति और आध्यात्मिक ऊर्जा प्रदान करता है।",
      path: "/dailysatsang",
      tag: "सबसे अधिक देखा गया",
    },
    {
      id: 4,
      label: "महत्वपूर्ण तिथियाँ",
      emoji: "📅",
      description:
        "आश्रम से संबंधित सभी आगामी एवं महत्वपूर्ण कार्यक्रमों की जानकारी प्राप्त करें।",
      path: "/important-dates",
      tag: "मुख्य तिथियाँ",
    },
    {
      id: 5,
      label: "संपर्क करें",
      emoji: "📞",
      description:
        "आपके सभी प्रश्नों, सहायता और मार्गदर्शन के लिए हम सदैव उपलब्ध हैं।",
      path: "/contact",
      tag: "सहायता",
    },
  ];

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="quick-page">
      <div className="quick-inner">
        {/* Title */}
        <h1 className="quick-title">शीर्ष 5 महत्वपूर्ण पेज</h1>

        {/* Subtitle */}
        <p className="quick-subtitle">
          क्या आप इस वेबसाइट पर नए हैं या जल्द ही आश्रम आने वाले हैं?  
          इन पाँच महत्वपूर्ण अनुभागों से शुरुआत करें और कुछ ही क्लिक में
          आवश्यक जानकारी प्राप्त करें।
        </p>

        {/* Grid of cards */}
        <div className="quick-grid">
          {quickLinks.map((item) => (
            <button
              key={item.id}
              className="quick-card"
              onClick={() => handleNavigate(item.path)}
            >
              <div className="quick-card-header">
                <span className="quick-emoji">{item.emoji}</span>
                <span className="quick-tag">{item.tag}</span>
              </div>

              <h2 className="quick-card-title">{item.label}</h2>
              <p className="quick-card-text">{item.description}</p>

              <div className="quick-card-footer">
                <span className="quick-card-cta">पेज खोलें</span>
                <span className="quick-card-arrow">→</span>
              </div>
            </button>
          ))}
        </div>

        {/* Small note */}
        <p className="quick-note">
          कुछ और खोज रहे हैं? सभी पेज देखने के लिए ऊपर दिए गए मुख्य मेनू का
          उपयोग करें।
        </p>
      </div>
    </div>
  );
};

export default QuickStart;

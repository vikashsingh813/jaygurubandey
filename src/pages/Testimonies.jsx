// src/pages/Testimonies.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Testimonies.css";

const testimoniesData = [
  {
    id: 1,
    name: "सीता देवी",
    date: "10 अगस्त 2025",
    location: "हैदराबाद",
    tag: "चिकित्सा / स्वस्थ्यता",
    shortText:
      "कई महीनों से मैं अपने स्वास्थ्य और मन को लेकर चिंतित थी। आश्रम आकर और नियमित सत्संग करने के बाद मेरे भीतर गहरी शांति महसूस होने लगी...",
    fullText:
      "कई महीनों से मैं अपने स्वास्थ्य और मन को लेकर बहुत चिंतित थी। आश्रम आने और नियमित सत्संग करने से मेरे हृदय में एक गहरी शांति महसूस हुई। गुरुजी के आशीर्वाद से मुझे अपनी समस्याओं का सामना शांत मन से करने की शक्ति मिली। थोड़े ही समय में मेरी रिपोर्ट्स बेहतर आने लगीं और परिवार में भी खुशी और जुड़ाव बढ़ गया। अब मैं हर दिन गुरुजी के नाम से दिन की शुरुआत करती हूँ और हर निर्णय में उनका मार्गदर्शन महसूस करती हूँ।"
  },
  {
    id: 2,
    name: "रवि कुमार",
    date: "25 जुलाई 2025",
    location: "सिकंदराबाद",
    tag: "मार्गदर्शन",
    shortText:
      "मैं अपने करियर और निजी जीवन को लेकर बहुत उलझन में था। आश्रम में एक बार दर्शन करने के बाद धीरे-धीरे सब स्पष्ट होने लगा...",
    fullText:
      "मैं करियर और निजी जीवन को लेकर बहुत भ्रमित था। आश्रम में एक बार दर्शन करने के बाद सब कुछ धीरे-धीरे स्पष्ट होने लगा। गुरुजी के सत्संग और उनकी सादगी भरी शिक्षाओं — श्रद्धा, धैर्य और मेहनत — ने मुझे आत्मविश्वास दिया। सही समय पर मुझे एक अच्छा अवसर मिला और परिवारिक रिश्तों में भी मधुरता आ गई। सच में लगता है गुरुजी ने मेरे जीवन की व्यवस्था मुझसे कहीं बेहतर की।"
  },
  {
    id: 3,
    name: "अंजलि शर्मा",
    date: "5 जून 2025",
    location: "पुणे",
    tag: "आंतरिक शांति",
    shortText:
      "पहले मैं बहुत सोचती रहती थी और हर बात को लेकर तनाव में रहती थी। नियमित भजन और जप ने मन में एक मधुर शांति ला दी...",
    fullText:
      "पहले मैं हर छोटी बात को लेकर अधिक सोचती रहती थी और तनावग्रस्त रहती थी। नियमित भजन, जप और साधना ने मेरे भीतर एक मधुर, शांत आनंद भर दिया। अब मैं हल्का महसूस करती हूँ, अच्छी नींद आती है और रोज़मर्रा की चुनौतियों का मुस्कुराकर सामना करती हूँ। आश्रम मेरे लिए दूसरा घर बन गया है—जहाँ बैठकर शांत मन से गुरुजी की उपस्थिति महसूस होती है। यह आंतरिक शांति मेरे जीवन का सबसे बड़ा आशीर्वाद है।"
  },
  {
    id: 4,
    name: "महेन्द्र एवं परिवार",
    date: "19 मई 2025",
    location: "मुंबई",
    tag: "पारिवारिक आशीर्वाद",
    shortText:
      "हमारा परिवार आर्थिक और भावनात्मक कठिनाइयों से गुजर रहा था। आश्रम में गुरु पूर्णिमा के दौरान एक बड़ा परिवर्तन आया...",
    fullText:
      "हमारा परिवार आर्थिक और भावनात्मक समस्याओं से एक साथ जूझ रहा था। आश्रम में गुरु पूर्णिमा के दौरान हमने एक बड़ा परिवर्तन महसूस किया। धीरे-धीरे समस्याएँ एक-एक करके हल होने लगीं। अप्रत्याशित सहायता मिली, काम बढ़ा, और घर में प्रेम और एकता आ गई। हमें सच में लगता है कि उस कठिन समय में गुरुजी ने हमारा हाथ पकड़कर साथ चलाया।"
  }
];

const Testimonies = () => {
  const [openId, setOpenId] = useState(1); // default open
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const featured = testimoniesData[0];
  const others = testimoniesData.slice(1);

  return (
    <div className="testimonies-page">
      {/* Intro */}
      <section className="testimonies-intro">
        <h1>🌸 कृपा की साक्षी कथाएँ 🌸</h1>
        <p className="testimonies-subtitle">
          वे वास्तविक अनुभव जिन्हें भक्तों ने गुरुजी के आशीर्वाद, सत्संग और
          आश्रम के प्रेममय वातावरण में प्राप्त किया।
        </p>
      </section>

      {/* Story of the Week */}
      <section className="featured-section">
        <p className="section-label">✨ इस सप्ताह की जीवन कथा</p>

        <div className="featured-card">
          <div className="featured-left">
            <div className="avatar-circle big-avatar">
              {featured.name.charAt(0)}
            </div>
            <div>
              <h2>{featured.name}</h2>
              <p className="meta">
                {featured.date} • {featured.location}
              </p>
              <span className="tag-pill">{featured.tag}</span>
            </div>
          </div>

          <p className="featured-text">{featured.fullText}</p>
        </div>
      </section>

      {/* More testimonies */}
      <section className="grid-section">
        <p className="section-label">🌸 और भक्तों के अनुभव</p>

        <div className="testimonies-grid">
          {others.map((t) => {
            const isOpen = openId === t.id;
            return (
              <article
                key={t.id}
                className={`testimony-card ${isOpen ? "open" : ""}`}
              >
                <div className="card-header">
                  <div className="avatar-circle">{t.name.charAt(0)}</div>
                  <div>
                    <h3>{t.name}</h3>
                    <p className="meta">
                      {t.date} • {t.location}
                    </p>
                    <span className="tag-pill">{t.tag}</span>
                  </div>
                </div>

                <p className="card-text">
                  {isOpen ? t.fullText : t.shortText}
                </p>

                <button
                  className="card-button"
                  onClick={() => setOpenId(isOpen ? null : t.id)}
                >
                  {isOpen ? "कम दिखाएँ" : "पूरी कहानी पढ़ें"}
                </button>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="share-story-section">
        <h2>अपना अनुभव साझा करें</h2>
        <p>
          क्या आपने गुरुजी की कृपा महसूस की है? कोई चमत्कार, मार्गदर्शन या
          आंतरिक परिवर्तन? आपका अनुभव किसी और भक्त के लिए आशा और प्रेरणा बन
          सकता है।
        </p>

        <button
          className="share-story-btn"
          onClick={() => navigate("/submit-testimony")}
        >
          अपना अनुभव भेजें
        </button>
      </section>
    </div>
  );
};

export default Testimonies;

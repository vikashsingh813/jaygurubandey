import React, { useState } from "react";
import "./ExploreAshram.css";

const ZONES = [
  {
    id: "main-temple",
    name: "मुख्य मंदिर",
    type: "प्रार्थना स्थल",
    short: "दैनिक आरती, जप और ध्यान का मुख्य स्थान।",
    details:
      "मुख्य मंदिर वह स्थान है जहाँ भक्त सुबह–शाम की आरती, जप, साधना और आशीर्वाद के लिए एकत्रित होते हैं। यह आश्रम का सबसे शांत और दिव्य क्षेत्र है।",
    tip: "मंदिर में प्रवेश करते समय शांति बनाए रखें और मोबाइल साइलेंट पर रखें।"
  },
  {
    id: "meditation-hall",
    name: "ध्यान कक्ष",
    type: "शांत क्षेत्र",
    short: "गहन ध्यान और आध्यात्मिक अभ्यास के लिए शांत स्थान।",
    details:
      "यह हॉल समूह ध्यान, निर्देशित सत्रों और मौन साधना के लिए बनाया गया है। पूरे दिन यहाँ शांत वातावरण बनाए रखा जाता है।",
    tip: "ध्यान के दौरान अनावश्यक हलचल न करें।"
  },
  {
    id: "library",
    name: "आध्यात्मिक पुस्तकालय",
    type: "अध्ययन क्षेत्र",
    short: "आध्यात्मिक पुस्तकों, शिक्षाओं और मार्गदर्शकों का संग्रह।",
    details:
      "पुस्तकालय में आध्यात्मिक साहित्य, गुरुजी की शिक्षाएँ, और ध्यान, भक्ति व दर्शन से संबंधित पुस्तकों का संग्रह उपलब्ध है।",
    tip: "शांत रहें और पुस्तकों को सावधानी से संभालें।"
  },
  {
    id: "dining",
    name: "भोजन/प्रसाद हॉल",
    type: "सेवा क्षेत्र",
    short: "जहाँ प्रसाद और भोजन वितरित किया जाता है।",
    details:
      "भक्त यहाँ प्रसाद ग्रहण करते हैं। स्वयंसेवक यहाँ सेवा, सफाई और व्यवस्था संभालते हैं।",
    tip: "जितना आवश्यक हो उतना ही भोजन लें।"
  },
  {
    id: "garden",
    name: "आश्रम उद्यान",
    type: "प्रकृति क्षेत्र",
    short: "फूलों, हरियाली और बैठने की जगहों वाला शांत क्षेत्र।",
    details:
      "यह प्राकृतिक क्षेत्र सुबह की सैर, हल्के व्यायाम और प्रकृति में शांत चिंतन के लिए उपयुक्त है।",
    tip: "फूलों को बिना अनुमति न तोड़ें।"
  },
  {
    id: "rooms",
    name: "भक्त कक्ष",
    type: "आवास क्षेत्र",
    short: "भक्तों और आगंतुकों के रहने की सुविधा।",
    details:
      "यह कक्ष आगंतुक भक्तों के रहने हेतु उपलब्ध होते हैं। स्वच्छता और अनुशासन बनाए रखना आवश्यक है।",
    tip: "कमरा छोड़ते समय लाइट और पंखा बंद कर दें।"
  }
];

const ExploreAshram = () => {
  const [activeZoneId, setActiveZoneId] = useState(null);
  const activeZone = ZONES.find((z) => z.id === activeZoneId) || null;

  return (
    <div className="explore-page">
      {/* Header */}
      <section className="explore-intro">
        <h1>📍इंटरएक्टिव आश्रम मार्गदर्शिका 📍</h1>
        <p>
          यह इंटरएक्टिव पेज आपको आश्रम के विभिन्न क्षेत्रों का अनुभव कराता है।
          किसी भी स्थान पर क्लिक करें या ऊपर दिए गए ज़ोन चुनें और विस्तृत जानकारी देखें।
        </p>
      </section>

      <section className="explore-layout">
        {/* Visual Map */}
        <div className="explore-map-card">
          <h2>आश्रम नक्शा</h2>
          <p className="map-sub">किसी भी क्षेत्र पर क्लिक करके विवरण देखें।</p>

          <div className="simple-map">
            {ZONES.map((zone, index) => (
              <button
                key={zone.id}
                className={`map-box ${
                  activeZoneId === zone.id ? "map-box-active" : ""
                }`}
                onClick={() => setActiveZoneId(zone.id)}
                style={{ gridArea: `z${index + 1}` }}
              >
                {zone.name}
              </button>
            ))}
          </div>
        </div>

        {/* Information */}
        <div className="explore-info-card">
          <h2>क्षेत्र विवरण</h2>

          <div className="zone-tabs">
            {ZONES.map((zone) => (
              <button
                key={zone.id}
                className={`zone-tab ${
                  activeZoneId === zone.id ? "zone-tab-active" : ""
                }`}
                onClick={() => setActiveZoneId(zone.id)}
              >
                {zone.name}
              </button>
            ))}
          </div>

          {/* Placeholder */}
          {!activeZone && (
            <div className="zone-placeholder">
              <p>👆 विवरण देखने के लिए कृपया किसी भी क्षेत्र का चयन करें।</p>
            </div>
          )}

          {/* Details */}
          {activeZone && (
            <div className="zone-details">
              <h3>{activeZone.name}</h3>
              <p className="zone-type-chip">{activeZone.type}</p>

              <p className="zone-short">{activeZone.short}</p>

              <div className="zone-card">
                <h4>परिचय</h4>
                <p>{activeZone.details}</p>
              </div>

              <div className="zone-card zone-tip">
                <h4>सुझाव</h4>
                <p>{activeZone.tip}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExploreAshram;

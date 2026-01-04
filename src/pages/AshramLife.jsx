import React from "react";
import "./AshramLife.css";

import seva1 from "../assets/photo1.jpg";
import seva2 from "../assets/photo3.jpg";
import seva3 from "../assets/photo4.jpg";
import seva4 from "../assets/photo27.jpg";

const AshramLife = () => {
  return (
    <section className="ashram-life">

      {/* ===== HERO ===== */}
      <div className="al-hero">
        <h1>आश्रम जीवन</h1>
        <p>दैनिक दिनचर्या, अनुशासन एवं सेवा</p>
      </div>

      {/* ===== INTRO ===== */}
      <div className="al-intro">
        <p>
          आश्रम जीवन भक्ति, अनुशासन, सरलता और निःस्वार्थ सेवा का पावन संगम है।
          यहाँ का प्रत्येक कार्य साधना का रूप है, जो मन की शांति, विनम्रता
          और आत्मिक उन्नति का मार्ग प्रशस्त करता है।
        </p>
      </div>

      {/* ===== DAILY ROUTINE ===== */}
      <div className="al-section">
        <h2>🌅 दैनिक दिनचर्या</h2>

        <div className="al-cards">
          <div className="al-card">
            <h3>प्रातः सत्संग</h3>
            <p>
              प्रातःकालीन प्रार्थना, ध्यान और नाम-स्मरण द्वारा मन की शुद्धि
              एवं भक्ति का जागरण।
            </p>
          </div>

          <div className="al-card">
            <h3>आध्यात्मिक अध्ययन</h3>
            <p>
              गुरुजी के उपदेश, शास्त्रों एवं अमृतवाणी का श्रवण कर
              आत्मबोध की प्राप्ति।
            </p>
          </div>

          <div className="al-card">
            <h3>भजन एवं कीर्तन</h3>
            <p>
              सामूहिक भजन-कीर्तन के माध्यम से प्रेम, श्रद्धा
              और समर्पण की अनुभूति।
            </p>
          </div>

          <div className="al-card">
            <h3>संध्या आरती</h3>
            <p>
              कृतज्ञता और ईश्वर स्मरण के साथ दिन का शांतिपूर्ण समापन।
            </p>
          </div>
        </div>
      </div>

      {/* ===== SEVA ===== */}
      <div className="al-section seva-section">
        <h2>🙏 सेवा (निःस्वार्थ कर्म)</h2>

        <div className="seva-grid">
          <div className="seva-card">
            <img src={seva1} alt="Ashram Seva" />
            <h4>आश्रम व्यवस्था सेवा</h4>
            <p>
              श्रद्धा भाव से आश्रम की सफ़ाई, बागवानी
              एवं रख-रखाव करना।
            </p>
          </div>

          <div className="seva-card">
            <img src={seva2} alt="Langar Seva" />
            <h4>लंगर एवं रसोई सेवा</h4>
            <p>
              भोजन की तैयारी और प्रसाद स्वरूप
              सभी श्रद्धालुओं को सेवा करना।
            </p>
          </div>

          <div className="seva-card">
            <img src={seva3} alt="Satsang Seva" />
            <h4>सत्संग एवं आयोजन सेवा</h4>
            <p>
              सत्संगों की व्यवस्था, कार्यक्रम संचालन
              एवं भक्तों की सहायता।
            </p>
          </div>

          <div className="seva-card">
            <img src={seva4} alt="Community Seva" />
            <h4>समाज सेवा</h4>
            <p>
              सेवा, मार्गदर्शन एवं आध्यात्मिक
              जागरूकता के माध्यम से समाज की सहायता।
            </p>
          </div>
        </div>
      </div>

      {/* ===== CLOSING ===== */}
      <div className="al-closing">
        <p>
          आश्रम जीवन में सेवा कोई कर्तव्य नहीं, बल्कि भक्ति है।  
          हर कर्म प्रार्थना बन जाता है और हर क्षण आत्म-साक्षात्कार की ओर एक कदम।
        </p>
        <span>🙏 साहेब सबका 🙏</span>
      </div>

    </section>
  );
};

export default AshramLife;

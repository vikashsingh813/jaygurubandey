import React from "react";
import "./IntlCenters.css";
import indiaMap from "../assets/indiamap.jpg"; // use India map image

const InternationalCenters = () => {
  return (
    <div className="centers-page">
      {/* ===== 1. INTRO SECTION ===== */}
      <section className="centers-intro">
        <h1>प्रेम और प्रकाश का संदेश पूरे भारत में</h1>
        <p>
          गुरुजी की दिव्य शिक्षाओं ने भारत के हर कोने में अनगिनत हृदयों को
          स्पर्श किया है। हमारे केंद्रों और बढ़ते भक्त परिवार से जुड़ें, जो भक्ति,
          शांति और आध्यात्मिक जागरण का संदेश देशभर में फैला रहे हैं।
        </p>
      </section>

      {/* ===== 2. INTERACTIVE INDIA MAP SECTION ===== */}
      <section className="centers-map-section">
        <h2>हमारी उपस्थिति पूरे भारत में</h2>
        <div className="map-container">
          <img src={indiaMap} alt="India Map" className="world-map" />

          {/* Example Pins (adjust positions) */}
          <div className="map-pin" style={{ top: "35%", left: "48%" }}>
            <span>दिल्ली</span>
          </div>
          <div className="map-pin" style={{ top: "55%", left: "45%" }}>
            <span>हैदराबाद</span>
          </div>
          <div className="map-pin" style={{ top: "40%", left: "50%" }}>
            <span>लखनऊ</span>
          </div>
          <div className="map-pin" style={{ top: "70%", left: "52%" }}>
            <span>चेन्नई</span>
          </div>
          <div className="map-pin" style={{ top: "60%", left: "35%" }}>
            <span>मुंबई</span>
          </div>
          <div className="map-pin" style={{ top: "30%", left: "60%" }}>
            <span>कोलकाता</span>
          </div>
        </div>
      </section>

      {/* ===== 3. REACH STATISTICS ===== */}
      <section className="centers-stats">
        <div className="stat-card">
          <h3>20+</h3>
          <p>राज्यों में पहुँच</p>
        </div>
        <div className="stat-card">
          <h3>50+</h3>
          <p>सक्रिय केंद्र</p>
        </div>
        <div className="stat-card">
          <h3>1 लाख+</h3>
          <p>जुड़े हुए भक्त</p>
        </div>
        <div className="stat-card">
          <h3>100+</h3>
          <p>साप्ताहिक सत्संग</p>
        </div>
      </section>
    </div>
  );
};

export default InternationalCenters;
